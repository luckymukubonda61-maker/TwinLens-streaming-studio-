"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brand } from "@/components/brand";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
  async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError("");const r=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});const d=await r.json();setBusy(false);if(!r.ok){setError(d.error||"Unable to sign in");return;}router.push("/dashboard");router.refresh();}
  return <main className="flex min-h-screen items-center justify-center px-5 py-12"><div className="panel w-full max-w-md p-8"><Brand/><h1 className="mt-9 text-2xl font-bold">Welcome back</h1><p className="mt-2 text-sm text-[#9297a1]">Sign in to your TwinLens workspace.</p><form onSubmit={submit} className="mt-7 space-y-4"><label className="block text-sm">Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-[#343840] bg-[#090a0c] px-3 py-3 outline-none focus:border-[#f3ce36]"/></label><label className="block text-sm">Password<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-[#343840] bg-[#090a0c] px-3 py-3 outline-none focus:border-[#f3ce36]"/></label>{error&&<p className="text-sm text-red-400">{error}</p>}<button disabled={busy} className="gold-bg w-full rounded-full py-3 font-bold disabled:opacity-50">{busy?"Signing in...":"Sign in"}</button></form><p className="mt-6 text-center text-sm text-[#9297a1]">New to TwinLens? <Link className="gold" href="/register">Create an account</Link></p></div></main>;
}
