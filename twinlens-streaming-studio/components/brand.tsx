export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3ce36] text-lg font-black text-[#f3ce36]">TL</div>
      <div>
        <div className={`font-black tracking-[.16em] ${compact ? "text-sm" : "text-lg"}`}>TWINLENS</div>
        <div className="text-[10px] font-semibold tracking-[.42em] text-[#f3ce36]">STUDIO</div>
      </div>
    </div>
  );
}
