import Link from "next/link";
import { LayoutDashboard, Radio, Video, Settings, CreditCard, Users, FolderOpen } from "lucide-react";
import { Brand } from "./brand";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/studio", label: "Live Studio", icon: Radio },
  { href: "/dashboard#broadcasts", label: "Broadcasts", icon: Video },
  { href: "/dashboard#media", label: "Media Library", icon: FolderOpen },
  { href: "/dashboard#team", label: "Team", icon: Users },
  { href: "/dashboard#billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard#settings", label: "Settings", icon: Settings }
];

export function Sidebar({ name }: { name: string }) {
  return (
    <aside className="flex w-full flex-col border-b border-[#25282e] bg-[#0d0f12] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <Brand />
      <div className="mt-10 space-y-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={label} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-[#1b1e23] ${label === "Overview" ? "bg-[#1b1e23] text-[#f3ce36]" : "text-[#b8bdc6]"}`}>
            <Icon size={18} /> {label}
          </Link>
        ))}
      </div>
      <div className="mt-auto hidden rounded-xl border border-[#292c32] p-3 md:block">
        <div className="text-sm font-semibold">{name}</div>
        <div className="mt-1 text-xs text-[#9297a1]">Free workspace</div>
      </div>
    </aside>
  );
}
