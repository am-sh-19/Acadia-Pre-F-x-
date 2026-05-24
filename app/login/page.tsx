import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Compass, Lock } from "lucide-react";

const PASSWORD = "acadiamit26";
const COOKIE_NAME = "acadia_access";

async function signIn(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  const from = String(formData.get("from") ?? "/");

  if (password !== PASSWORD) {
    const params = new URLSearchParams({ error: "1" });
    if (from !== "/") params.set("from", from);
    redirect(`/login?${params.toString()}`);
  }

  cookies().set(COOKIE_NAME, "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  // Sanitize redirect target — only allow internal paths.
  const target = from.startsWith("/") && !from.startsWith("//") ? from : "/";
  redirect(target);
}

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { from?: string; error?: string };
}) {
  const from = searchParams?.from ?? "/";
  const error = searchParams?.error === "1";

  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-cream-50 border-2 border-forest-700 rounded-3xl p-8 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-5 h-5 text-forest-700" />
            <span className="font-display text-sunrise-500 text-2xl">Acadia &rsquo;26</span>
          </div>
          <h1 className="font-display text-sunrise-400 text-5xl leading-tight mb-1">
            Welcome
          </h1>
          <p className="text-forest-800 text-sm mb-6 font-medium">
            Enter the trip password to access the guide.
          </p>

          <form action={signIn} className="space-y-3">
            <input type="hidden" name="from" value={from} />
            <label className="block">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-forest-700 mb-1.5">
                <Lock className="w-3.5 h-3.5" />
                Trip password
              </span>
              <input
                type="password"
                name="password"
                required
                autoFocus
                autoComplete="current-password"
                className="w-full rounded-xl border-2 border-forest-300 bg-cream-50 px-4 py-3 text-forest-900 placeholder:text-forest-500 focus:border-sunrise-400 focus:outline-none transition-colors font-medium"
                placeholder="••••••••••"
              />
            </label>

            {error && (
              <p className="text-sm text-sunrise-700 bg-sunrise-100 border border-sunrise-300 rounded-xl px-3 py-2 font-semibold">
                Incorrect password — try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-sunrise-400 hover:bg-sunrise-500 text-forest-900 font-bold rounded-full transition-all shadow-card hover:-translate-y-0.5"
            >
              Enter
            </button>
          </form>

          <p className="text-xs text-forest-600 mt-6 text-center font-medium">
            If you don&rsquo;t have the password, reach out to any of the trip leads.
          </p>
        </div>
      </div>
    </main>
  );
}
