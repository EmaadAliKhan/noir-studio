"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Try again.");
      }
      setStatus("success");
      setMessage("You're on the list.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Subscription failed.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex items-center rounded-full border border-border bg-surface focus-within:border-border-strong transition"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 bg-transparent h-12 pl-5 pr-2 text-sm text-ink placeholder:text-ink-3 focus:outline-none"
        aria-label="Email address"
        disabled={status === "loading" || status === "success"}
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="m-1 inline-flex items-center justify-center size-10 rounded-full bg-accent text-ink-inverse hover:brightness-95 transition disabled:opacity-60"
        aria-label="Subscribe"
      >
        {status === "loading" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : status === "success" ? (
          <Check size={16} />
        ) : (
          <ArrowRight size={16} />
        )}
      </button>
      {message ? (
        <div
          className={`absolute -bottom-6 left-2 text-xs ${
            status === "success" ? "text-accent-2" : "text-accent-3"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}
