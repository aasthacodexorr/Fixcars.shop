import Image from "next/image";
import {
  faArrowUpRightFromSquare,
  faCalendarCheck,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ADDRESS,
  DIRECTIONS_URL,
  EMAIL,
  FEATURES,
  HOURS,
  MAKES,
  MAKE_SERVICES,
  PERKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_URL,
  REVIEWS,
  SERVICES,
  SITEMAP_URL,
  TERMS_URL,
  WHEEL_STEPS,
  ZOP_DEALER_URL,
} from "@/lib/site";
import HeroWheel from "./HeroWheel";
import { QuoteButton } from "./QuoteContext";
import {
  ArrowIcon,
  CheckIcon,
  FaIcon,
  FEATURE_ICONS,
  ServiceIcon,
} from "./ServiceIcon";
import { ServiceLink } from "./ServiceMenu";
import ReviewRail from "./ReviewRail";
import ServiceImage from "./ServiceImage";
import ServicePicker from "./ServicePicker";
import TiltCard from "./TiltCard";

const GREEN_BUTTON =
  "btn-green block w-full cursor-pointer rounded-[12px] px-[30px] py-3 text-center text-base font-medium text-white transition-opacity hover:opacity-90";
const H2 = "text-[28px] font-bold tracking-tight text-black lg:text-[44px]";
const PAGE = "mx-auto max-w-[1240px] px-3.5 md:px-8";

// Where each floating service card sits around the wheel, as % of the wheel area.
const FLOATING_CARDS: Record<
  string,
  { left: string; top: string; delay: string }
> = {
  "Brake Repairs": { left: "2%", top: "10%", delay: "0s" },
  "Wheel Alignment": { left: "-1%", top: "42%", delay: "-2.4s" },
  "Auto AC Repairs": { left: "4%", top: "72%", delay: "-4.2s" },
  Tires: { left: "72%", top: "8%", delay: "-1.2s" },
  "Oil Change": { left: "75%", top: "40%", delay: "-3.3s" },
  "Check Engine Light": { left: "71%", top: "70%", delay: "-5.1s" },
};

function OfferSticker({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative size-[116px] shrink-0 rounded-full bg-brand text-white shadow-[0_14px_30px_rgba(0,175,102,0.45)] lg:size-[88px] 2xl:size-[124px] ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="spin-slow size-full"
      >
        <defs>
          <path
            id="sticker-circle"
            d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="10"
          fontWeight="700"
          textLength="292"
        >
          <textPath href="#sticker-circle">
            NEW CUSTOMER OFFER • NEW CUSTOMER OFFER •
          </textPath>
        </text>
      </svg>
      <p className="absolute inset-0 grid place-content-center text-center font-bold leading-none">
        <span className="text-[26px] lg:text-[20px] 2xl:text-[28px]">10%</span>
        <span className="mt-0.5 text-[12px] lg:text-[10px]">OFF*</span>
      </p>
    </div>
  );
}

function Road({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-t-[6px] border-brand bg-[#20272b] ${className}`}
    >
      <div className="relative h-full">
        <div className="road-lines absolute left-0 top-1/2 h-1 w-[calc(100%+112px)] -translate-y-1/2" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-rise relative lg:min-h-[calc(100svh-var(--header-h))]">
      <div className="px-3.5 pb-8 pt-7 md:px-8 lg:flex lg:min-h-[calc(100svh-var(--header-h))] lg:items-center lg:pb-[100px] lg:pt-6">
        <div className="relative w-full lg:max-w-[44%] lg:pl-[max(0px,calc((100vw-1600px)/2))]">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-black shadow-[0_4px_14px_rgba(9,65,80,0.1)]">
            <span className="pulse-dot size-2.5 rounded-full bg-brand" />
            Providing exceptional service in Brampton
          </p>
          <h1 className="mt-5 text-[46px] uppercase font-bold leading-[1.05] tracking-tight text-black sm:text-[64px] lg:text-[54px] xl:text-[55px] 2xl:text-[76px]">
            Brampton’s most{" "}
            <span className="inline-block -rotate-2 rounded-[12px] bg-brand px-3 pb-1 text-white shadow-[0_10px_24px_rgba(0,175,102,0.35)]">
              trusted
            </span>{" "}
            auto repair shop.
          </h1>
          <p className="mt-6 max-w-[500px] text-[18px] leading-snug text-black lg:text-[20px]">
            One stop for brakes, tires, alignment, oil, AC and check engine
            lights, on cars, vans and 4x4s.
          </p>

          <div className="relative z-20 mt-7 flex max-w-[560px] flex-col gap-3 sm:flex-row">
            <ServicePicker />
            <QuoteButton className="btn-green h-[56px] shrink-0 cursor-pointer rounded-[12px] px-7 font-bold text-white shadow-[0_12px_26px_rgba(0,175,102,0.35)] transition-transform hover:-translate-y-0.5" />
          </div>

          <div className="mt-5 flex max-w-[560px] items-center justify-between gap-4">
            <p className="text-[16px] text-black">
              Or call us at
              <a
                href={PHONE_HREF}
                className="mt-0.5 block whitespace-nowrap text-[24px] font-bold lg:text-[26px]"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <OfferSticker />
          </div>
        </div>
      </div>

      {/* Desktop: the services float around the pinned wheel */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] xl:block">
        {SERVICES.map((service) => {
          const place = FLOATING_CARDS[service.name];
          return (
            <div
              key={service.name}
              className="float-card absolute w-[186px]"
              style={{
                left: place.left,
                top: place.top,
                animationDelay: place.delay,
              }}
            >
              <ServiceLink
                href={service.href}
                className="pointer-events-auto flex items-center gap-2.5 rounded-[16px] bg-white p-2 pr-3 shadow-[0_16px_34px_rgba(9,65,80,0.22)] transition-transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="relative block size-[52px] shrink-0 overflow-hidden rounded-[10px] bg-pale">
                  <Image
                    src={`/images/services/${service.icon}.webp`}
                    alt=""
                    fill
                    sizes="52px"
                    className="object-cover"
                  />
                </span>
                <span className="text-[14px] font-bold leading-tight text-black">
                  {service.name}
                </span>
              </ServiceLink>
            </div>
          );
        })}
      </div>

      {/* Phones: no wheel, so the services take its place */}
      <ul className="grid grid-cols-3 gap-2.5 px-3.5 pb-7 md:px-8 lg:hidden">
        {SERVICES.map((service) => (
          <li key={service.name}>
            <ServiceLink
              href={service.href}
              className="block h-full overflow-hidden rounded-[14px] bg-white shadow-[0_8px_20px_rgba(9,65,80,0.12)]"
            >
              <span className="relative block aspect-[8/5] bg-pale">
                <Image
                  src={`/images/services/${service.icon}.webp`}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </span>
              <span className="block px-2 py-2 text-center text-[12.5px] font-bold leading-tight text-black">
                {service.name}
              </span>
            </ServiceLink>
          </li>
        ))}
      </ul>
      <Road className="h-[58px] lg:hidden" />
    </div>
  );
}

function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 lg:mb-8">
      <div className="pointer-events-auto w-full rounded-[16px] bg-white p-6 shadow-[0_18px_50px_rgba(9,65,80,0.18)] lg:max-w-[min(580px,41vw)] lg:p-8">
        {children}
      </div>
    </div>
  );
}

function CheckList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[1px] text-gray-500">
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-[15px] leading-snug text-black"
          >
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const OUTLINE_BUTTON =
  "inline-flex w-full items-center justify-center gap-2 rounded-[12px] border border-brand2 px-5 py-3 text-center font-medium text-brand2 transition-colors hover:bg-pale";

// The wheel stays pinned on screen while the hero and captions scroll past it.
export function WheelJourney() {
  return (
    <section className="relative bg-hero">
      <div className="pointer-events-none sticky top-[var(--header-h)] z-0 hidden h-[calc(100svh-var(--header-h))] overflow-hidden lg:block">
        <p
          aria-hidden="true"
          className="absolute inset-x-0 top-[3%] select-none whitespace-nowrap text-center text-[19vw] font-black leading-none tracking-tighter text-white/45"
        >
          CARDORA
        </p>
        {/* Sized so the bottom of the wheel lands on the road */}
        <div className="absolute right-0 top-0 h-[calc(117%-82px)] w-[56%]">
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            className="spin-slower absolute inset-0 m-auto size-[92%] overflow-visible"
          >
            <g fill="none" stroke="#00af66" strokeLinecap="round">
              <path d="M100 8a92 92 0 0 1 79 46" strokeWidth="5" />
              <path d="M192 100a92 92 0 0 1-120 88" strokeWidth="5" />
              <path d="M27 155A92 92 0 0 1 56 19" strokeWidth="5" />
              <circle
                cx="100"
                cy="100"
                r="86"
                strokeWidth="0.6"
                strokeDasharray="1.500 5"
              />
            </g>
          </svg>
        </div>
        <Road className="absolute inset-x-0 bottom-0 h-[84px]" />
        <div
          aria-hidden="true"
          className="absolute bottom-[34px] right-[28%] h-7 w-[28%] translate-x-1/2 rounded-[50%] bg-black/70 blur-xl"
        />
        <div className="absolute right-0 top-0 h-[calc(117%-82px)] w-[56%]">
          <HeroWheel />
        </div>
      </div>

      <div className="relative z-10 lg:-mt-[calc(100svh-var(--header-h))]">
        <Hero />
        <div
          id="wheel-steps"
          className="px-3.5 pb-2 pt-4 md:px-8 lg:pb-12 lg:pl-[max(32px,calc((100vw-1600px)/2+32px))]"
        >
          {WHEEL_STEPS.map((step) => {
            const service = SERVICES.find((s) => s.name === step.service);
            if (!service) return null;
            return (
              <StepCard key={step.service}>
                <p className="flex items-center gap-2 font-bold text-brand">
                  <ServiceIcon name={service.icon} className="size-[18px]" />
                  {step.service}
                </p>
                <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-tight text-black lg:text-[36px]">
                  {step.headline}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-700">
                  {step.text}
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <CheckList title="What we do" items={service.includes} />
                  <CheckList title="Why Cardora" items={step.reasons} />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <QuoteButton className={GREEN_BUTTON} />
                  <ServiceLink href={service.href} className={OUTLINE_BUTTON}>
                    Learn more
                    <ArrowIcon className="size-5" />
                  </ServiceLink>
                </div>
              </StepCard>
            );
          })}
          <StepCard>
            <h2 className="text-[28px] font-bold leading-tight tracking-tight text-black lg:text-[36px]">
              Back on the road, good as new
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Everything else your car needs, all in one trusted Brampton shop.
            </p>
            <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {SERVICES.filter(
                (s) => !WHEEL_STEPS.some((step) => step.service === s.name),
              ).map((service) => (
                <li key={service.name}>
                  <ServiceLink
                    href={service.href}
                    className="group flex items-center gap-3 py-3 font-bold text-black hover:text-brand"
                  >
                    <ServiceIcon
                      name={service.icon}
                      className="size-5 shrink-0 text-brand"
                    />
                    <span className="flex-1">
                      {service.name}
                      <span className="block text-[14px] font-normal text-gray-600">
                        {service.includes.join(" · ")}
                      </span>
                    </span>
                    <ArrowIcon className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                  </ServiceLink>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <QuoteButton className={GREEN_BUTTON}>
                Get A Free Quote Plus 10% Off*
              </QuoteButton>
            </div>
          </StepCard>
        </div>
      </div>
    </section>
  );
}

export function ServicePills() {
  return (
    <div className="no-scrollbar flex snap-x scroll-px-3.5 gap-3 overflow-x-auto px-3.5 py-5 lg:justify-center lg:scroll-px-8 lg:px-8">
      {SERVICES.map((service) => (
        <ServiceLink
          key={service.name}
          href={service.href}
          className="flex shrink-0 snap-start items-center gap-2 rounded-[12px] border border-brand2 bg-white px-6 py-4 text-base font-medium text-brand2 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,175,102,0.25)] lg:px-7"
        >
          <ServiceIcon name={service.icon} className="size-[18px]" />
          {service.name}
        </ServiceLink>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className={`${PAGE} scroll-mt-28 pt-10`}>
      <h2 className={`${H2} mb-8`}>Let’s take care of your ride</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {SERVICES.map((service) => (
          <div key={service.name} className="rise-3d">
            <TiltCard className="rounded-[14px]">
              <ServiceLink
                href={service.href}
                className="group flex h-full flex-col rounded-[14px] border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_22px_44px_rgba(0,0,0,0.14)]"
              >
                <ServiceImage
                  icon={service.icon}
                  alt={`${service.name} at Cardora`}
                />
                <span className="flex flex-1 items-center justify-between gap-4 p-5">
                  <span>
                    <span className="block text-[17px] font-bold text-[#1a1a1a]">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-[15px] text-gray-600">
                      {service.includes.join(" · ")}
                    </span>
                  </span>
                  <ArrowIcon className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </span>
              </ServiceLink>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Makes() {
  return (
    <section className={`${PAGE} pt-16`}>
      <h2 className={H2}>
        Get your car serviced by fully qualified technicians
      </h2>
      <p className="mt-3 text-lg text-gray-700">{MAKE_SERVICES.join(" · ")}</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {MAKES.map((make, index) => {
          // The odd card out spans both columns on phones, so it lies sideways.
          const isWide = index === MAKES.length - 1;
          return (
            <li
              key={make.name}
              className={`rise-3d ${isWide ? "col-span-2 md:col-span-1" : ""}`}
            >
              <ServiceLink
                href={make.href}
                aria-label={`${make.name} ${make.model} mechanic`}
                className={`group flex h-full flex-col overflow-hidden rounded-[14px] bg-[#f4f5f7] p-4 transition-shadow lg:p-5 hover:shadow-[0_18px_40px_rgba(9,65,80,0.14)] ${isWide ? "max-md:flex-row max-md:items-center max-md:justify-between" : ""}`}
              >
                <span className="block">
                  <span className="block text-[13px] text-gray-600 lg:text-[14px]">
                    {make.name}
                  </span>
                </span>
                <span
                  className={`relative mx-auto mt-3 block aspect-[5/2] w-[80%] ${isWide ? "max-md:mx-0 max-md:mt-0 max-md:w-[38%]" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-[6%] bottom-[-3%] h-[14%] rounded-[50%] bg-black/30 blur-sm"
                  />
                  <Image
                    src={make.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                    className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
              </ServiceLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Offer() {
  return (
    <section className={`${PAGE} pt-16`}>
      <div className="rise-3d grid gap-8 rounded-[14px] border border-gray-200 p-6 lg:grid-cols-[1fr_260px] lg:p-8">
        <div>
          <h2 className="text-[28px] font-bold tracking-tight text-[#333] lg:text-[36px]">
            Save time and money with our new customer offer
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {PERKS.map((perk) => (
              <li
                key={perk.text}
                className="flex items-center gap-3 text-black"
              >
                <CheckIcon className="size-5 shrink-0 text-brand" />
                <span>
                  <strong>{perk.highlight}</strong> {perk.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            *Conditions apply. Call {PHONE_DISPLAY} for details.
          </p>
        </div>
        <div>
          <div className="rounded-[12px] bg-estimate p-6 text-center">
            <p className="text-black">New customers save</p>
            <p className="mt-1 text-[52px] font-bold leading-tight text-[#333]">
              10%
            </p>
            <p className="mx-auto mt-1 w-fit rounded-[5px] bg-brand px-4 py-1 text-sm font-bold text-white">
              off your service*
            </p>
          </div>
          <div className="mt-3">
            <QuoteButton className={GREEN_BUTTON} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="mt-16 scroll-mt-24 bg-review py-14">
      <h2 className={`${H2} text-center`}>Happy customers</h2>
      <ReviewRail>
        {REVIEWS.map((review) => (
          <li
            key={review.name}
            className="flex w-full shrink-0 snap-start flex-col rounded-[12px] bg-white p-6 md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={review.photo}
                alt=""
                width={65}
                height={65}
                className="size-[65px] rounded-full object-cover"
              />
              <div>
                <p className="text-[20px] font-bold text-review-name">
                  {review.name}
                </p>
                <p
                  aria-label="5 out of 5 stars"
                  className="text-lg leading-none tracking-wider text-[#fbbc05]"
                >
                  ★★★★★
                </p>
              </div>
            </div>
            <blockquote className="mt-4 leading-[26px] text-gray-800">
              {review.text}
            </blockquote>
          </li>
        ))}
      </ReviewRail>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" className={`${PAGE} scroll-mt-28 pt-16`}>
      <h2 className={`${H2} mb-8`}>Why bring your car to us?</h2>
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="rise-3d">
            <TiltCard className="rounded-[14px]">
              <div className="flip-parent h-full rounded-[14px] bg-pale p-4 sm:p-6">
                <span className="icon-coin tilt-pop grid size-[58px] place-items-center rounded-[14px] bg-white text-brand shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
                  <FaIcon
                    icon={FEATURE_ICONS[feature.icon]}
                    className="size-7"
                  />
                </span>
                <p className="mt-3 text-[15px] leading-snug text-black sm:mt-4 sm:text-[18px] sm:leading-[26px]">
                  {feature.title}
                </p>
              </div>
            </TiltCard>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Guarantee() {
  return (
    <section id="guarantee" className={`${PAGE} scroll-mt-28 pb-16 pt-16`}>
      <h2 className={`${H2} mb-8`}>
        Feel at ease with our unbeatable ‘peace of mind’ guarantee
      </h2>
      <div className="grid gap-6 md:grid-cols-3 lg:gap-10">
        <div className="rise-3d rounded-[14px] bg-pale p-7">
          <Image
            src="/images/brand/check-badge.svg"
            alt=""
            width={70}
            height={78}
          />
          <p className="mt-5 text-[22px] leading-8 text-black">
            Next Day Appointment Guarantee
          </p>
        </div>
        <div className="rise-3d rounded-[14px] bg-pale p-7">
          <Image
            src="/images/brand/heart-card.svg"
            alt=""
            width={70}
            height={78}
          />
          <p className="mt-5 text-[22px] leading-8 text-black">
            Price Beat Guarantee Over Dealerships*
          </p>
        </div>
        <div className="rise-3d grid place-items-center rounded-[14px] bg-pale p-4">
          <Image
            src="/images/6_cda-Offers-v2-n-4-1-.png"
            alt="The Cardora service centre and a technician working under a raised vehicle"
            width={1100}
            height={890}
            sizes="(min-width: 768px) 30vw, 90vw"
            className="h-auto max-h-[200px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}

const CONTACT_CARD =
  "flip-parent flex items-center justify-between gap-4 rounded-[12px] border border-charcoal-line p-6 text-left transition-colors hover:bg-white/10";

function CoinIcon({ icon }: { icon: typeof faPhone }) {
  return (
    <span className="icon-coin grid size-[55px] shrink-0 place-items-center rounded-full bg-brand text-white">
      <FaIcon icon={icon} className="size-6" />
    </span>
  );
}

function CardText({ title, text }: { title: string; text: string }) {
  return (
    <span>
      <span className="block text-[20px] font-bold text-white">{title}</span>
      <span className="mt-1 block text-white">{text}</span>
    </span>
  );
}


export function Contact() {
  return (
    <section id="visit" className="scroll-mt-24 bg-charcoal py-14 text-white">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Heading & Quick Contact Links (Spans 2 columns on lg) */}
          <div className="flex flex-col justify-between rounded-2xl border border-charcoal-line bg-zinc-900/40 p-6 md:col-span-2">
            <div>
              <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                Get in touch
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                Get in touch with us, we’re here to help
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Have questions or need assistance? Reach out directly by phone or email.
              </p>
            </div>

            {/* Quick action buttons row */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={PHONE_HREF}
                className="group flex items-center justify-between rounded-xl border border-charcoal-line bg-zinc-950/60 p-3.5 transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Call us</p>
                  <p className="text-sm font-semibold text-white">{PHONE_DISPLAY}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-zinc-950">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between rounded-xl border border-charcoal-line bg-zinc-950/60 p-3.5 transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Email</p>
                  <p className="text-sm font-semibold text-white">Send us an email</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-zinc-950">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours & Showroom Address */}
          <div className="flex flex-col justify-between rounded-2xl border border-charcoal-line bg-zinc-900/40 p-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-emerald-400" />
                <span>Hours of Operation</span>
              </div>

              <dl className="mt-6 space-y-3 divide-y divide-charcoal-line/60 text-sm">
                {HOURS.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 pt-3 first:pt-0">
                    <dt className="text-zinc-400">{row.days}</dt>
                    <dd className="font-medium text-white">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between rounded-xl border border-charcoal-line/70 bg-zinc-950/40 px-3.5 py-2.5 text-xs font-medium text-emerald-400 transition hover:border-zinc-700 hover:text-emerald-300"
            >
              <span className="flex items-center gap-2 truncate">
                <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">8050 Dixie Rd, Brampton</span>
              </span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-3 w-3 shrink-0" />
            </a>
          </div>

          {/* Card 3: Free Quote CTA */}
          <QuoteButton className="group flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-zinc-900/60 to-zinc-900/80 p-6 text-left shadow-lg shadow-emerald-950/20 transition-all hover:border-emerald-500/60">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/30 transition-transform group-hover:scale-105">
                <FontAwesomeIcon icon={faCalendarCheck} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Free quote</h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                Plus 10% off for new customers*
              </p>
            </div>

            <div className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-semibold text-zinc-950 transition hover:bg-emerald-400">
              Claim 10% Discount
            </div>
          </QuoteButton>

        </div>

      </div>
    </section>
  );
}
const FOOT_HEADING =
  "mb-5 text-[18px] font-bold uppercase tracking-[1px] text-white";
const FOOT_LINK = "uppercase text-white hover:text-brand";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <Contact />
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 pt-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <div>
          <h3 className={FOOT_HEADING}>Our services</h3>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <ServiceLink href={service.href} className={FOOT_LINK}>
                  {service.name}
                </ServiceLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={FOOT_HEADING}>Popular makes</h3>
          <ul className="space-y-3">
            {MAKES.map((make) => (
              <li key={make.name}>
                <ServiceLink href={make.href} className={FOOT_LINK}>
                  {make.name} mechanic
                </ServiceLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={FOOT_HEADING}>Contact us</h3>
          <p className="flex max-w-[240px] gap-3">
            <FaIcon icon={faLocationDot} className="mt-1 size-4 shrink-0" />
            {ADDRESS}
          </p>
        </div>
      </div>
      {/* Same bottom bar as the main Cardora site */}
      <div className="mx-auto mt-10 flex max-w-[1600px] flex-col items-center justify-center gap-4 border-t border-charcoal-line px-5 pb-5 pt-6 lg:px-10">
        <div className="text-center text-[13px] uppercase text-white md:text-center">
          © 2026 Cardora.
          <br />
          <span className="flex items-center gap-2">
            All rights reserved. Powered by
            <a href={ZOP_DEALER_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/brand/zop-dealer.png"
                alt="Zop Dealer"
                width={30}
                height={28}
                className="h-auto w-5"
              />
            </a>
          </span>
        </div>
      
      </div>
    </footer>
  );
}
