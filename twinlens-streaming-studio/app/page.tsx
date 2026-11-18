import Link from "next/link";
import { ArrowRight, Radio, Users, Sparkles, MonitorPlay } from "lucide-react";
import { Brand } from "@/components/brand";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Brand />
        <div className="flex items-center gap-3">
          <Link className="rounded-full px-4 py-2 text-sm text-[#c4c7ce] hover:text-white" href="/login">Log in</Link>
          <Link className="gold-bg rounded-full px-5 py-2.5 text-sm font-bold" href="/register">Get started</Link>
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5b4c1b] bg-[#201b0c] px-4 py-2 text-xs text-[#f3ce36]"><Sparkles size={14}/> YOUR CREATIVE CONTROL ROOM</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">Make every broadcast <span className="gold">brilliant.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#a5aab4]">Bring your guests, stories and audience together in one powerful streaming studio. Create, produce and share — all from your browser.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/register" className="gold-bg inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold">Create your studio <ArrowRight size={17}/></Link>
            <Link href="/login" className="rounded-full border border-[#343840] px-6 py-3.5 font-semibold text-white hover:bg-[#171a1f]">Sign in</Link>
          </div>
          <p className="mt-5 text-xs text-[#777d87]">Two Minds, One Brand.</p>
        </div>
        <div className="panel relative p-4 shadow-2xl shadow-black">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-semibold tracking-wider text-[#c4c7ce]">TWINLENS LIVE STUDIO</div>
            <div className="flex items-center gap-2 text-xs text-[#f3ce36]"><span className="h-2 w-2 rounded-full bg-[#f3ce36]"/> STUDIO PREVIEW</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex aspect-video items-center justify-center rounded-xl border border-[#3c3420] bg-gradient-to-br from-[#282316] to-[#111317]"><div className="text-center"><Radio className="mx-auto mb-2 text-[#f3ce36]" size={28}/><span className="text-xs text-[#d7d8dc]">Host preview</span></div></div>
            <div className="flex aspect-video items-center justify-center rounded-xl border border-[#292d34] bg-gradient-to-br from-[#20242c] to-[#111317]"><div className="text-center"><Users className="mx-auto mb-2 text-[#aeb4bf]" size={28}/><span className="text-xs text-[#d7d8dc]">Guest stage</span></div></div>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-[#1b1e23] p-3">
            <span className="text-xs text-[#b9bec7]">Your production. Your brand.</span>
            <span className="rounded-full bg-[#f3ce36] px-3 py-1 text-[10px] font-bold text-black">READY TO CREATE</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] text-[#9ba1ac]">
            <div className="rounded-lg bg-[#171a1f] p-3"><MonitorPlay className="mx-auto mb-1 text-[#f3ce36]" size={17}/>Scenes</div>
            <div className="rounded-lg bg-[#171a1f] p-3"><Users className="mx-auto mb-1 text-[#f3ce36]" size={17}/>Guests</div>
            <div className="rounded-lg bg-[#171a1f] p-3"><Radio className="mx-auto mb-1 text-[#f3ce36]" size={17}/>Go live</div>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#22252b] px-6 py-7 text-center text-xs text-[#737984]">© {new Date().getFullYear()} TwinLens Streaming Studio. Two Minds, One Brand.</footer>
    </main>
  );
}
