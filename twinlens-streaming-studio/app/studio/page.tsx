"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Camera, Mic, MonitorUp, Users, Radio, Video, Settings2 } from "lucide-react";

export default function StudioPage() {
  const [title, setTitle] = useState("My TwinLens Broadcast");
  const [created, setCreated] = useState(false);
  const [message, setMessage] = useState("");
  async function createBroadcast() {
    setMessage("");
    const response = await fetch("/api/broadcasts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title }) });
    const data = await response.json();
    if (!response.ok) { setMessage(data.error || "Please sign in to create a broadcast."); return; }
    setCreated(true);
    setMessage("Broadcast workspace created. Camera and live transport integration are the next media milestone.");
  }
  return (
    <main className="min-h-screen p-5 md:p-8">
      <header className="flex items-center justify-between"><Link href="/dashboard" className="flex items-center gap-2 text-sm text-[#aeb4bf]"><ArrowLeft size={16}/> Dashboard</Link><div className="text-sm font-black tracking-[.18em]">TWINLENS <span className="gold">STUDIO</span></div><span className="text-xs text-[#9297a1]">Studio workspace</span></header>
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-[#9297a1]">Production workspace</p><h1 className="mt-1 text-3xl font-bold">Live Studio</h1></div><div className="flex gap-2"><span className="rounded-full border border-[#343840] px-3 py-2 text-xs text-[#aeb4bf]">● Not broadcasting</span></div></div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_310px]">
          <section className="panel p-4">
            <div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold tracking-wider text-[#b9bec7]">PROGRAM PREVIEW</span><span className="text-xs text-[#9297a1]">16:9 stage</span></div>
            <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-[#353941] bg-[radial-gradient(ellipse_at_center,#25231b_0%,#111317_60%,#090a0c_100%)] text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#6a5a24] bg-[#28210d] text-[#f3ce36]"><Camera size={28}/></div>
              <h2 className="mt-4 text-xl font-semibold">Your stage is ready</h2><p className="mt-2 max-w-sm text-sm text-[#9297a1]">Camera, microphone, guest rooms and live transport will be connected in the media-engine milestone.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{[{icon:Camera,label:"Camera"},{icon:Mic,label:"Microphone"},{icon:MonitorUp,label:"Share screen"},{icon:Users,label:"Invite guest"}].map(({icon:Icon,label})=><button key={label} disabled className="flex items-center justify-center gap-2 rounded-xl border border-[#30343b] bg-[#171a1f] p-3 text-xs text-[#737984]"><Icon size={16}/>{label}</button>)}</div>
          </section>
          <aside className="space-y-4">
            <div className="panel p-5"><h3 className="font-semibold">Broadcast details</h3><label className="mt-4 block text-xs text-[#9297a1]">Broadcast title</label><input value={title} onChange={e=>setTitle(e.target.value)} className="mt-2 w-full rounded-lg border border-[#343840] bg-[#090a0c] px-3 py-3 text-sm outline-none focus:border-[#f3ce36]"/><button onClick={createBroadcast} disabled={created || !title.trim()} className="gold-bg mt-4 w-full rounded-full px-4 py-3 text-sm font-bold disabled:opacity-50">{created ? "Workspace created" : "Create broadcast workspace"}</button>{message && <p className="mt-3 text-xs text-[#f3ce36]">{message}</p>}</div>
            <div className="panel p-5"><h3 className="font-semibold">Production controls</h3><div className="mt-4 space-y-3 text-sm text-[#9da3ad]"><div className="flex items-center gap-3"><Radio size={16}/> Streaming destinations <span className="ml-auto text-xs">Next phase</span></div><div className="flex items-center gap-3"><Video size={16}/> Recording <span className="ml-auto text-xs">Next phase</span></div><div className="flex items-center gap-3"><Settings2 size={16}/> Scene settings <span className="ml-auto text-xs">Next phase</span></div></div></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
