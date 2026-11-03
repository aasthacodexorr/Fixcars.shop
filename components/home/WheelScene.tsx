"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useStore } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const GREEN = "#00AB66";
const TAU = Math.PI * 2;
const SPOKE_GROUPS = 5;
// Wheel parts are revolved around Y; this turns that axis to face the camera.
const FACE_CAMERA: [number, number, number] = [Math.PI / 2, 0, 0];
const TREAD_ROWS = [-0.21, -0.07, 0.07, 0.21];
const TREAD_PER_ROW = 64;

function lathe(points: [number, number][], segments = 80) {
  const curve = new THREE.SplineCurve(
    points.map(([r, y]) => new THREE.Vector2(r, y)),
  );
  return new THREE.LatheGeometry(curve.getPoints(44), segments);
}

function Tire() {
  const geometry = useMemo(
    () =>
      lathe([
        [1.02, -0.36],
        [1.16, -0.44],
        [1.36, -0.44],
        [1.49, -0.37],
        [1.54, -0.26],
        [1.545, 0],
        [1.54, 0.26],
        [1.49, 0.37],
        [1.36, 0.44],
        [1.16, 0.44],
        [1.02, 0.36],
      ]),
    [],
  );
  const tread = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    const blocks = tread.current;
    if (!blocks) return;
    const dummy = new THREE.Object3D();
    TREAD_ROWS.forEach((axial, row) => {
      for (let i = 0; i < TREAD_PER_ROW; i++) {
        const angle = ((i + (row % 2) * 0.5) / TREAD_PER_ROW) * TAU;
        dummy.position.set(Math.cos(angle) * 1.56, Math.sin(angle) * 1.56, axial);
        dummy.rotation.set(0, 0, angle);
        dummy.updateMatrix();
        blocks.setMatrixAt(row * TREAD_PER_ROW + i, dummy.matrix);
      }
    });
    blocks.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <group>
      <mesh geometry={geometry} rotation={FACE_CAMERA}>
        <meshStandardMaterial color="#14191b" roughness={0.82} metalness={0.05} />
      </mesh>
      <instancedMesh
        ref={tread}
        args={[undefined, undefined, TREAD_ROWS.length * TREAD_PER_ROW]}
      >
        <boxGeometry args={[0.05, 0.11, 0.115]} />
        <meshStandardMaterial color="#101416" roughness={0.9} />
      </instancedMesh>
    </group>
  );
}

function spokeGeometry() {
  // A tapered spoke running outward along +X, from the hub to the rim.
  const shape = new THREE.Shape();
  shape.moveTo(0.2, -0.095);
  shape.lineTo(0.96, -0.055);
  shape.lineTo(0.96, 0.055);
  shape.lineTo(0.2, 0.095);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.05,
    bevelEnabled: true,
    bevelSize: 0.012,
    bevelThickness: 0.012,
    bevelSegments: 2,
  });
}

function Rim() {
  const barrel = useMemo(
    () =>
      lathe([
        [1.05, -0.4],
        [1.08, -0.37],
        [1.0, -0.3],
        [0.92, -0.2],
        [0.92, 0.2],
        [1.0, 0.3],
        [1.08, 0.37],
        [1.05, 0.4],
      ]),
    [],
  );
  const spoke = useMemo(() => spokeGeometry(), []);
  const angles = useMemo(
    () =>
      Array.from({ length: SPOKE_GROUPS }, (_, i) => (i / SPOKE_GROUPS) * TAU),
    [],
  );

  return (
    <group>
      <mesh geometry={barrel} rotation={FACE_CAMERA}>
        <meshStandardMaterial
          color="#aeb9bd"
          metalness={1}
          roughness={0.24}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Brand-green pinstripe around the rim lip */}
      <mesh position={[0, 0, 0.39]}>
        <torusGeometry args={[1.065, 0.009, 12, 128]} />
        <meshStandardMaterial
          color={GREEN}
          emissive={GREEN}
          emissiveIntensity={1.4}
          roughness={0.3}
        />
      </mesh>
      {angles.map((angle) => (
        <group key={angle} rotation={[0, 0, angle]} position={[0, 0, 0.3]}>
          <mesh geometry={spoke} rotation={[0, 0, 0.1]}>
            <meshStandardMaterial color="#7d8a90" metalness={1} roughness={0.3} />
          </mesh>
          <mesh geometry={spoke} rotation={[0, 0, -0.1]}>
            <meshStandardMaterial color="#7d8a90" metalness={1} roughness={0.3} />
          </mesh>
        </group>
      ))}
      {/* Hub */}
      <mesh rotation={FACE_CAMERA} position={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.27, 0.29, 0.14, 48]} />
        <meshStandardMaterial color="#5c686e" metalness={1} roughness={0.32} />
      </mesh>
      <mesh rotation={FACE_CAMERA} position={[0, 0, 0.39]}>
        <cylinderGeometry args={[0.1, 0.11, 0.05, 40]} />
        <meshStandardMaterial
          color={GREEN}
          metalness={0}
          roughness={0.42}
          envMapIntensity={0.3}
        />
      </mesh>
      {angles.map((angle) => (
        <mesh
          key={angle}
          rotation={FACE_CAMERA}
          position={[
            Math.cos(angle + TAU / 10) * 0.19,
            Math.sin(angle + TAU / 10) * 0.19,
            0.385,
          ]}
        >
          <cylinderGeometry args={[0.027, 0.03, 0.04, 6]} />
          <meshStandardMaterial color="#d5dcde" metalness={1} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function rotorGeometry() {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, 0.82, 0, TAU, false);
  const center = new THREE.Path();
  center.absarc(0, 0, 0.3, 0, TAU, true);
  shape.holes.push(center);
  // Staggered rings of drilled cooling holes.
  [0.46, 0.57, 0.68].forEach((radius, ring) => {
    for (let i = 0; i < 12; i++) {
      const angle = ((i + ring / 3) / 12) * TAU;
      const hole = new THREE.Path();
      hole.absarc(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0.018,
        0,
        TAU,
        true,
      );
      shape.holes.push(hole);
    }
  });
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.07,
    bevelEnabled: false,
    curveSegments: 24,
  });
}

function Rotor({
  heat,
}: {
  heat: React.RefObject<THREE.MeshStandardMaterial | null>;
}) {
  const geometry = useMemo(() => rotorGeometry(), []);
  return (
    <group>
      {/* Dust shield: closes the view through the wheel behind the rotor */}
      <mesh position={[0, 0, -0.16]}>
        <circleGeometry args={[0.96, 72]} />
        <meshStandardMaterial color="#12181a" metalness={0.6} roughness={0.6} />
      </mesh>
      <mesh geometry={geometry} position={[0, 0, -0.035]}>
        <meshStandardMaterial
          ref={heat}
          color="#c6cdd0"
          metalness={1}
          roughness={0.34}
          emissive="#ff2a00"
          emissiveIntensity={0}
        />
      </mesh>
      <mesh rotation={FACE_CAMERA} position={[0, 0, 0.06]}>
        <cylinderGeometry args={[0.3, 0.32, 0.22, 48]} />
        <meshStandardMaterial color="#6f7a7f" metalness={1} roughness={0.42} />
      </mesh>
    </group>
  );
}

function caliperGeometry() {
  const start = 0.2;
  const end = 1.16;
  const shape = new THREE.Shape();
  shape.absarc(0, 0, 0.9, start, end, false);
  shape.absarc(0, 0, 0.56, end, start, true);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.24,
    bevelEnabled: true,
    bevelSize: 0.028,
    bevelThickness: 0.028,
    bevelSegments: 4,
    curveSegments: 28,
  });
}

function Caliper() {
  const geometry = useMemo(() => caliperGeometry(), []);
  return (
    <mesh geometry={geometry} position={[0, 0, -0.12]}>
      <meshStandardMaterial
        color={GREEN}
        metalness={0}
        roughness={0.42}
        envMapIntensity={0.3}
      />
    </mesh>
  );
}

// Compiles the shaders off the main thread where the browser supports it, so the
// page stays responsive. Rendering only starts once this has finished.
function PrepareShaders({ onDone }: { onDone: () => void }) {
  const store = useStore();
  useEffect(() => {
    const { gl, scene, camera } = store.getState();
    let cancelled = false;
    const finish = () => {
      if (!cancelled) onDone();
    };
    gl.compileAsync(scene, camera).then(finish, finish);
    return () => {
      cancelled = true;
    };
  }, [store, onDone]);
  return null;
}

function Studio() {
  const store = useStore();
  useEffect(() => {
    const { gl, scene } = store.getState();
    // Generated locally so metal reflections don't need a downloaded HDR file.
    const generator = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const target = generator.fromScene(room, 0.04);
    scene.environment = target.texture;
    scene.environmentIntensity = 0.85;
    return () => {
      scene.environment = null;
      target.dispose();
      generator.dispose();
    };
  }, [store]);
  return null;
}

const SPARK_COUNT = 70;

// Sparks thrown off where the caliper grips the rotor during the brake step.
function Sparks({ amount }: { amount: React.RefObject<number> }) {
  const points = useRef<THREE.Points>(null);
  const motion = useRef<{ life: number; vx: number; vy: number }[]>([]);
  const [geometry] = useState(() =>
    new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(SPARK_COUNT * 3), 3),
    ),
  );

  useFrame((_, rawDelta) => {
    const cloud = points.current;
    if (!cloud) return;
    const delta = Math.min(rawDelta, 0.05);
    const positions = cloud.geometry.getAttribute("position");
    if (motion.current.length === 0) {
      motion.current = Array.from({ length: SPARK_COUNT }, () => ({
        life: 0,
        vx: 0,
        vy: 0,
      }));
    }
    motion.current.forEach((spark, i) => {
      spark.life -= delta;
      if (spark.life <= 0) {
        if (Math.random() < amount.current * 0.35) {
          spark.life = 0.35 + Math.random() * 0.55;
          spark.vx = 0.7 + Math.random() * 1.9;
          spark.vy = 0.1 + Math.random() * 1.5;
          positions.setXYZ(i, 0.66, 0.42, 0.14);
        } else {
          positions.setXYZ(i, 0, 0, -50);
        }
        return;
      }
      spark.vy -= 3.4 * delta;
      positions.setXYZ(
        i,
        positions.getX(i) + spark.vx * delta,
        positions.getY(i) + spark.vy * delta,
        positions.getZ(i),
      );
    });
    positions.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        color="#ff5a00"
        size={0.06}
        transparent
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

// Green rings that sweep across the tire during the alignment step.
function AlignmentLasers({
  group,
}: {
  group: React.RefObject<THREE.Group | null>;
}) {
  return (
    <group ref={group} visible={false}>
      {[0, 1].map((ring) => (
        <mesh key={ring}>
          <torusGeometry args={[1.72, 0.012, 12, 140]} />
          <meshBasicMaterial color={GREEN} toneMapped={false} />
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[4.3, 0.012, 0.012]} />
        <meshBasicMaterial color={GREEN} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Where the caption column sits. Measured only when its size changes, so the
// render loop doesn't force the browser to recalculate layout on every frame.
function useStepsPosition() {
  const position = useRef({ top: 0, height: 0 });
  useEffect(() => {
    const steps = document.getElementById("wheel-steps");
    if (!steps) return;
    const measure = () => {
      const box = steps.getBoundingClientRect();
      position.current = { top: box.top + window.scrollY, height: box.height };
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(steps);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);
  return position;
}

const SLOW_FRAME_SECONDS = 1 / 40;

function Wheel({ onReady }: { onReady: () => void }) {
  const steps = useStepsPosition();
  const smoothProgress = useRef(0);
  const framesDrawn = useRef(0);
  const slowTime = useRef({ total: 0, frames: 0 });
  const root = useRef<THREE.Group>(null);
  const rotor = useRef<THREE.Group>(null);
  const caliper = useRef<THREE.Group>(null);
  const outerSlide = useRef<THREE.Group>(null);
  const outerSpin = useRef<THREE.Group>(null);
  const lasers = useRef<THREE.Group>(null);
  const heat = useRef<THREE.MeshStandardMaterial>(null);
  const sparkAmount = useRef(0);
  const angle = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, rawDelta) => {
    if (!root.current) return;
    const delta = Math.min(rawDelta, 0.1);
    const still = reducedMotion.current;
    const { clamp, damp, smoothstep: ss } = THREE.MathUtils;
    const time = state.clock.elapsedTime;

    // The first frames compile the shaders, so reveal the wheel only after them.
    framesDrawn.current += 1;
    if (framesDrawn.current === 3) onReady();

    // On a slower GPU, trade a little sharpness to hold the frame rate.
    const timing = slowTime.current;
    timing.total += rawDelta;
    timing.frames += 1;
    if (timing.frames === 45) {
      if (timing.total / timing.frames > SLOW_FRAME_SECONDS && state.viewport.dpr > 1) {
        state.setDpr(Math.max(1, state.viewport.dpr - 0.25));
      }
      timing.total = 0;
      timing.frames = 0;
    }

    // 0 to 1 through the four captions that scroll past the pinned wheel.
    const { top, height } = steps.current;
    const target = height
      ? clamp(
          (window.innerHeight / 2 + window.scrollY - top) / height,
          0,
          1,
        )
      : 0;
    // Eased, so mouse-wheel scrolling doesn't make the animation jump.
    smoothProgress.current = still
      ? target
      : damp(smoothProgress.current, target, 7, delta);
    const progress = smoothProgress.current;

    const tire = ss(progress, 0.02, 0.17) * (1 - ss(progress, 0.27, 0.38));
    const align = ss(progress, 0.27, 0.38) * (1 - ss(progress, 0.52, 0.6));
    const brake = ss(progress, 0.52, 0.6) * (1 - ss(progress, 0.66, 0.74));
    const finale = ss(progress, 0.68, 0.78);

    // Pose: side-on to show the tread, square-on to align, then back.
    const yaw =
      -0.52 -
      tire * 0.72 +
      align * 0.36 +
      brake * 0.14 +
      (still ? 0 : pointer.current.x * 0.14);
    root.current.rotation.y = damp(root.current.rotation.y, yaw, 5, delta);
    root.current.rotation.x = damp(
      root.current.rotation.x,
      0.08 + tire * 0.1 + (still ? 0 : pointer.current.y * 0.08),
      5,
      delta,
    );
    root.current.rotation.z = still ? 0 : Math.sin(time * 2.2) * 0.045 * align;
    root.current.scale.setScalar(
      damp(
        root.current.scale.x,
        1 + tire * 0.1 + brake * 0.42,
        5,
        delta,
      ),
    );

    // Spin slows to a stop under braking, then whips round for the finale.
    if (!still) {
      const speed =
        (0.55 + tire * 1.1 + finale * (1 - finale) * 26) * (1 - brake * 0.88);
      angle.current -= delta * speed;
    }
    if (rotor.current) rotor.current.rotation.z = angle.current;

    // The wheel rolls away to the right to reveal the brake behind it.
    if (outerSlide.current) {
      outerSlide.current.position.x = damp(
        outerSlide.current.position.x,
        brake * 4.6,
        5,
        delta,
      );
      outerSlide.current.visible = outerSlide.current.position.x < 4.4;
      if (outerSpin.current) {
        outerSpin.current.rotation.z =
          angle.current - outerSlide.current.position.x / 1.55;
      }
    }

    if (caliper.current) {
      caliper.current.position.z =
        still || brake < 0.5 ? 0 : Math.sin(time * 14) * 0.012 * brake;
    }
    if (heat.current) {
      heat.current.emissiveIntensity = damp(
        heat.current.emissiveIntensity,
        brake * 0.22,
        3,
        delta,
      );
    }
    sparkAmount.current = still ? 0 : brake;

    if (lasers.current) {
      lasers.current.visible = align > 0.02;
      lasers.current.scale.setScalar(0.92 + align * 0.08);
      const sweep = still ? 0.3 : Math.sin(time * 1.9) * 0.46;
      lasers.current.children[0].position.z = sweep;
      lasers.current.children[1].position.z = -sweep;
      lasers.current.children[2].position.z = sweep;
    }
  });

  return (
    <group ref={root} rotation={[0.08, -0.52, 0]} scale={0.86}>
      {/* The caliper grips the rotor and doesn't turn with the wheel. */}
      <group ref={caliper}>
        <Caliper />
      </group>
      <group ref={rotor}>
        <Rotor heat={heat} />
      </group>
      <Sparks amount={sparkAmount} />
      <group ref={outerSlide}>
        <group ref={outerSpin}>
          <Tire />
          <Rim />
        </group>
        <AlignmentLasers group={lasers} />
      </group>
    </group>
  );
}

export default function WheelScene({ onReady }: { onReady: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);
  const [shadersReady, setShadersReady] = useState(false);
  const onShadersDone = useCallback(() => setShadersReady(true), []);

  // Stop rendering once the hero has scrolled away, to save battery.
  useEffect(() => {
    if (!container.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting),
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="absolute inset-0">
      <Canvas
        frameloop={onScreen && shadersReady ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7.6], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: "none" }}
        // Neutral tone mapping keeps the brand green from washing out.
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.NeutralToneMapping;
        }}
      >
        <Studio />
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 5, 6]} intensity={1.7} />
        <pointLight position={[-3, -1, 3]} intensity={9} color="#ffffff" />
        <Wheel onReady={onReady} />
        <PrepareShaders onDone={onShadersDone} />
      </Canvas>
    </div>
  );
}
