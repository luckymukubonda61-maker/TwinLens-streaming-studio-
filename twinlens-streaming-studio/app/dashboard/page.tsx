import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, Clock3, Radio, Video, Users, Plus } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect("/login");
  const broadcasts = await prisma.broadcast.findMany({ where: { userId: session.id }, orderBy: { createdAt: "desc" }, take: 5 });

  return (
    <div className="min-h-screen md:flex">
      <Sidebar name={session.name}/>
      <main className="min-w-0 flex-1 p-6 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-sm text-[#9297a1]">Your creative control room</p><h1 className="mt-1 text-3xl font-bold">Welcome back, {session.name.split(" ")[0]}</h1></div>
          <Link href="/studio" className="gold-bg inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"><Plus size={17}/> Create broadcast</Link>
        </div>
        <section className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[{label:"Broadcasts",value:String(broadcasts.length),icon:Radio},{label:"Recording hours",value:"—",icon:Clock3},{label:"Audience reached",value:"—",icon:Users},{label:"Media assets",value:"0",icon:Video}].map(({label,value,icon:Icon})=><div key={label} className="panel p-5"><div className="flex items-center justify-between text-sm text-[#9da3ad]"><span>{label}</span><Icon size={18} className="text-[#f3ce36]"/></div><div className="mt-4 text-3xl font-bold">{value}</div><div className="mt-2 text-xs text-[#727985]">Your workspace overview</div></div>)}
        </section>
        <section className="mt-8 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
          <div className="panel p-6">
            <div className="flex items-center justify-between"><h2 className="text-lg font-bold">Recent broadcasts</h2><Link href="/studio" className="text-xs text-[#f3ce36]">Open studio <ArrowUpRight size={13} className="inline"/></Link></div>
            {broadcasts.length === 0 ? <div className="mt-6 rounded-xl border border-dashed border-[#383c44] p-8 text-center"><Radio className="mx-auto text-[#f3ce36]" size={30}/><p className="mt-3 font-semibold">Your next show starts here</p><p className="mt-2 text-sm text-[#9297a1]">Create your first broadcast workspace.</p><Link href="/studio" className="gold-bg mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-bold">Create broadcast</Link></div> : <div className="mt-4 divide-y divide-[#292d34]">{broadcasts.map(b=><div key={b.id} className="flex items-center justify-between py-4"><div><div className="font-medium">{b.title}</div><div className="mt-1 text-xs text-[#9297a1]">{b.createdAt.toLocaleDateString()}</div></div><span className="rounded-full bg-[#24272d] px-3 py-1 text-xs">{b.status.toLowerCase()}</span></div>)}</div>}
          </div>
          <div className="panel p-6"><h2 className="text-lg font-bold">Your next steps</h2><div className="mt-5 space-y-4 text-sm"><div className="flex gap-3"><span className="gold">01</span><div><b>Set up your brand</b><p className="mt-1 text-xs text-[#9297a1]">Prepare your logo, colors and overlays.</p></div></div><div className="flex gap-3"><span className="gold">02</span><div><b>Test your equipment</b><p className="mt-1 text-xs text-[#9297a1]">Check camera and microphone permissions.</p></div></div><div className="flex gap-3"><span className="gold">03</span><div><b>Create your first show</b><p className="mt-1 text-xs text-[#9297a1]">Start building your broadcast.</p></div></div></div></div>
        </section>
      </main>
    </div>
  );
}
