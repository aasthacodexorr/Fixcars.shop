import Image from "next/image";
import {
  faCalendarCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
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
  TERMS_URL,
  WHEEL_STEPS,
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

function HeroCar({ src, height }: { src: string; height: number }) {
  return (
    <span className="car-3d mx-2 align-middle">
      <Image
        src={src}
        alt=""
        width={300}
        height={height}
        loading="eager"
        className="inline-block h-auto w-[92px] sm:w-[170px] lg:w-[190px]"
      />
    </span>
  );
}

function Hero() {
  return (
    <div className="px-3.5 pb-5 pt-5 md:px-8 lg:flex lg:min-h-[calc(100svh-var(--header-h))] lg:items-center lg:py-8">
      <div className="w-full lg:max-w-[46%] lg:pl-[max(0px,calc((100vw-1600px)/2))]">
        <div>
          <h1 className="text-[38px] font-semibold leading-[1.15] text-black sm:text-[60px] lg:text-[62px] xl:text-[70px] xl:leading-[1.1]">
            Brampton’s
            <HeroCar src="/images/brand/car-yellow-suv.png" height={138} />
            <br />
            <HeroCar src="/images/brand/car-white-suv.png" height={99} />
            most trusted
            <br />
            auto repair
            <HeroCar src="/images/brand/car-orange-truck.png" height={98} />
          </h1>
          <p className="mt-4 max-w-[500px] text-[20px] leading-snug text-black lg:text-[24px]">
            Exceptional service and personalized attention.
          </p>
        </div>

        <div className="relative z-20 mt-6 max-w-[550px] rounded-[10px] bg-[#a7d4dc] p-6">
          <ServicePicker />
          <div className="my-3 flex items-center gap-4 text-black">
            <span className="h-px flex-1 bg-black/25" />
            or
            <span className="h-px flex-1 bg-black/25" />
          </div>
          <QuoteButton className={GREEN_BUTTON} />
          <p className="mt-3 text-center text-[15px] text-black">
            Plus 10% off for new customers*
          </p>
        </div>
      </div>
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
          <li key={item} className="flex gap-2 text-[15px] leading-snug text-black">
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
        <div className="absolute inset-y-0 right-0 w-[56%]">
          <div
            aria-hidden="true"
            className="absolute bottom-[9%] left-1/2 h-10 w-[62%] -translate-x-1/2 rounded-[50%] bg-[#094150]/25 blur-2xl"
          />
          <HeroWheel />
        </div>
      </div>

      <div className="relative z-10 lg:-mt-[calc(100svh-var(--header-h))]">
        <Hero />
        <div
          id="wheel-steps"
          className="px-3.5 pb-2 md:px-8 lg:pb-12 lg:pl-[max(32px,calc((100vw-1600px)/2+32px))]"
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
                <p className="mt-3 leading-relaxed text-gray-700">{step.text}</p>
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
      <h2 className={H2}>Get your car serviced by fully qualified technicians</h2>
      <p className="mt-3 text-lg text-gray-700">{MAKE_SERVICES.join(" · ")}</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {MAKES.map((make) => (
          <div key={make.name} className="rise-3d">
            <TiltCard className="rounded-[12px]">
              <ServiceLink
                href={make.href}
                className="group flex h-full items-center justify-between rounded-[12px] border border-brand2 bg-white p-5 transition-colors hover:bg-brand hover:text-white"
              >
                <span className="tilt-pop text-lg font-bold">{make.name}</span>
                <ArrowIcon className="size-5 shrink-0 text-brand group-hover:text-white" />
              </ServiceLink>
            </TiltCard>
          </div>
        ))}
      </div>
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
              <li key={perk.text} className="flex items-center gap-3 text-black">
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
                  <FaIcon icon={FEATURE_ICONS[feature.icon]} className="size-7" />
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
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 lg:grid-cols-[440px_1fr] lg:px-10">
        <div>
          <h2 className="text-[28px] font-bold leading-[37px] lg:text-[32px]">
            Get in touch with us, we’re here to help
          </h2>
          <dl className="mt-6 space-y-3 rounded-[12px] border border-charcoal-line p-4">
            {HOURS.map((row) => (
              <div key={row.days} className="flex justify-between gap-4">
                <dt>{row.days}:</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 flex gap-3">
            <FaIcon icon={faLocationDot} className="mt-1 size-4 shrink-0" />
            {ADDRESS}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <a href={PHONE_HREF} className={CONTACT_CARD}>
            <CardText title="Call us" text={PHONE_DISPLAY} />
            <CoinIcon icon={faPhone} />
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={CONTACT_CARD}
          >
            <CardText title="Directions" text="8050 Dixie Rd, Brampton" />
            <CoinIcon icon={faLocationDot} />
          </a>
          <a href={`mailto:${EMAIL}`} className={CONTACT_CARD}>
            <CardText title="Email" text="Send us an email" />
            <CoinIcon icon={faEnvelope} />
          </a>
          <QuoteButton className={`${CONTACT_CARD} cursor-pointer`}>
            <CardText title="Free quote" text="Plus 10% off for new customers*" />
            <CoinIcon icon={faCalendarCheck} />
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}

const FOOT_HEADING = "mb-5 text-[18px] font-bold uppercase tracking-[1px] text-white";
const FOOT_LINK = "uppercase text-white hover:text-brand";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal pb-8 text-white">
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
      <div className="mx-auto mt-10 flex max-w-[1600px] flex-col justify-between gap-3 border-t border-charcoal-line px-5 pt-6 text-sm uppercase sm:flex-row lg:px-10">
        <p>© 2026 Cardora. All rights reserved.</p>
        <p>
          <a href={PRIVACY_URL} className="hover:text-brand">
            Privacy Policy
          </a>
          {" | "}
          <a href={TERMS_URL} className="hover:text-brand">
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}
