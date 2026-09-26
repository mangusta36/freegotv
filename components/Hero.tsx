import {
  CircleDot,
  Clapperboard,
  Headphones,
  MonitorSmartphone,
  Play,
  Radio,
  Settings2,
  Smartphone,
  Trophy,
  Tv,
} from "lucide-react";
import { CTAButton } from "./CTAButton";

const trustItems = [
  { icon: Play, label: "Streaming" },
  { icon: MonitorSmartphone, label: "Multiple Devices" },
  { icon: Radio, label: "Channel Selection" },
  { icon: Headphones, label: "Customer Support" },
];

const featureItems = [
  { icon: Tv, title: "Live TV Channels", text: "Browse organized live programming and sample channel information." },
  { icon: Trophy, title: "Sports Events", text: "Follow available sports coverage with clear setup guidance." },
  { icon: Clapperboard, title: "Movies & TV Shows", text: "Explore entertainment categories from a modern streaming interface." },
  { icon: MonitorSmartphone, title: "Multiple Devices", text: "Review support for TVs, phones, tablets, computers and TV boxes." },
  { icon: Settings2, title: "Easy Setup", text: "Use practical installation guidance before choosing your plan." },
  { icon: Headphones, title: "Customer Support", text: "Get help with trial, setup and subscription questions." },
];

const contentCards = [
  { label: "Live TV", className: "from-red-500/80 to-red-950/80" },
  { label: "Sports", className: "from-zinc-100/90 to-zinc-500/70" },
  { label: "Movies", className: "from-red-300/80 to-zinc-900/80" },
  { label: "TV Shows", className: "from-zinc-500/80 to-red-950/80" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070707] pt-[72px] text-white">
      <div className="hero-noise absolute inset-0 opacity-[0.16]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgb(255_23_68_/_0.18),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,#070707_68%)]" />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <div className="grid min-w-0 items-center gap-12 lg:min-h-[610px] lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          <div className="min-w-0 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-red-100">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_18px_rgb(255_23_68_/_0.9)]" />
              PREMIUM IPTV STREAMING
            </span>
            <h1 className="mt-6 max-w-[22rem] text-[2.32rem] font-black leading-[1.05] tracking-tight text-white min-[390px]:text-[2.45rem] sm:max-w-none sm:text-5xl lg:text-[4.15rem]">
              Watch Live TV,
              <br />
              Sports, Movies
              <br />
              and More with <span className="text-gradient">FreeGoTV</span>
            </h1>
            <p className="mt-5 max-w-[21.5rem] text-base leading-8 text-zinc-300 sm:max-w-xl sm:text-lg">
              Explore live channels, sports, movies and TV content alongside supported devices, plan options and setup information before you choose.
            </p>
            <div className="mt-8 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row">
              <CTAButton href="/free-trial" className="min-h-12 w-full whitespace-nowrap px-6 sm:w-auto">Start Free Trial</CTAButton>
              <CTAButton
                href="#pricing"
                variant="secondary"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap border border-white/15 bg-white px-6 text-zinc-950 shadow-none hover:bg-zinc-100 sm:w-auto"
              >
                View Plans
              </CTAButton>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-4">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-w-0 items-center gap-2 text-sm font-bold text-zinc-300">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[.05] text-red-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[650px] lg:max-w-none">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative mx-auto aspect-[1.18] w-[min(92%,680px)] sm:w-[min(100%,680px)]">
              <div className="absolute left-[5%] right-[5%] top-[6%] rounded-[1.55rem] border border-white/15 bg-zinc-950 p-[2.3%] shadow-[0_28px_90px_rgb(0_0_0_/_0.55)]">
                <div className="relative aspect-video overflow-hidden rounded-[1.05rem] border border-white/10 bg-[linear-gradient(135deg,#17090d,#080808_45%,#18181b)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgb(255_23_68_/_0.28),transparent_32%),linear-gradient(90deg,rgb(0_0_0_/_0.18),transparent_52%)]" />
                  <div className="absolute left-[5%] top-[8%] flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--primary)]">F</span>
                    FreeGoTV
                  </div>
                  <div className="absolute left-[5%] top-[29%] max-w-[42%]">
                    <p className="text-[clamp(1.15rem,3vw,2.15rem)] font-black leading-tight">Your Streaming Hub</p>
                    <p className="mt-2 text-[clamp(.66rem,1.2vw,.88rem)] leading-5 text-zinc-300">Live channels, sports and entertainment organized for everyday viewing.</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[clamp(.62rem,1vw,.76rem)] font-black text-zinc-950">
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Watch
                    </div>
                  </div>
                  <div className="absolute bottom-[9%] right-[5%] grid w-[48%] grid-cols-2 gap-2">
                    {contentCards.map((card) => (
                      <div key={card.label} className={`aspect-[1.45] overflow-hidden rounded-xl bg-gradient-to-br ${card.className} p-2 shadow-lg shadow-black/30`}>
                        <div className="h-full rounded-lg border border-white/15 bg-black/10 p-2">
                          <div className="h-1.5 w-8 rounded-full bg-white/70" />
                          <p className="mt-auto pt-[30%] text-[clamp(.62rem,1.05vw,.82rem)] font-black text-white">{card.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-[9%] left-[5%] flex gap-1.5">
                    {[0, 1, 2].map((item) => (
                      <span key={item} className={`h-1.5 rounded-full ${item === 0 ? "w-8 bg-[var(--primary)]" : "w-3 bg-white/30"}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[22%] left-[40%] h-[5%] w-[20%] rounded-b-2xl bg-zinc-800" />
              <div className="absolute bottom-[18%] left-[34%] h-[4%] w-[32%] rounded-full bg-zinc-900 shadow-[0_18px_35px_rgb(0_0_0_/_0.45)]" />

              <div className="absolute bottom-[5%] left-[12%] w-[34%] rounded-2xl border border-white/12 bg-[#121214] p-4 shadow-[0_20px_50px_rgb(0_0_0_/_0.45)] sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">TV Box</p>
                    <p className="mt-1 text-sm font-bold text-zinc-200">Connected setup</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_16px_rgb(255_23_68_/_0.9)]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <span key={item} className="h-2 rounded-full bg-white/12" />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[6%] right-[24%] grid h-[36%] w-[8.8%] rotate-[-8deg] place-items-center rounded-[1.25rem] border border-white/10 bg-zinc-950 shadow-[0_18px_40px_rgb(0_0_0_/_0.48)]">
                <CircleDot className="h-6 w-6 text-red-300" />
                <div className="absolute top-[18%] h-3 w-3 rounded-full bg-white/25" />
                <div className="absolute bottom-[18%] grid gap-1.5">
                  <span className="h-1.5 w-4 rounded-full bg-white/18" />
                  <span className="h-1.5 w-4 rounded-full bg-white/18" />
                </div>
              </div>

              <div className="absolute bottom-[3%] right-[5%] w-[21%] rotate-[5deg] rounded-[1.25rem] border border-white/14 bg-zinc-950 p-2 shadow-[0_22px_55px_rgb(0_0_0_/_0.5)]">
                <div className="aspect-[9/16] overflow-hidden rounded-[.9rem] bg-[linear-gradient(160deg,#2a0b13,#090909_55%,#1f1f23)] p-3">
                  <Smartphone className="h-4 w-4 text-red-300" />
                  <p className="mt-5 text-[clamp(.62rem,1.15vw,.82rem)] font-black leading-tight">FreeGoTV</p>
                  <div className="mt-3 space-y-1.5">
                    <span className="block h-1.5 rounded-full bg-red-300/80" />
                    <span className="block h-1.5 w-3/4 rounded-full bg-white/25" />
                    <span className="block h-1.5 w-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[1%] left-[2%] right-[2%] h-[15%] rounded-[50%] bg-black/50 blur-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-full rounded-[1.5rem] border border-white/10 bg-white/[.045] p-3 shadow-[0_24px_70px_rgb(0_0_0_/_0.28)] lg:mt-2">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {featureItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3 rounded-2xl px-3 py-3 text-left lg:block lg:px-4 lg:py-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.06] text-red-300">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-white">{title}</span>
                  <span className="mt-1 block text-xs leading-5 text-zinc-400 [overflow-wrap:anywhere]">{text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
