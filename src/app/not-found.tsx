import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
      <p className="font-heading text-6xl text-gold">404</p>
      <h1 className="font-heading text-2xl text-cream mt-4">Page not found</h1>
      <p className="text-sm text-muted mt-2">The page you are looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-block mt-8 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
