"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Friendly fallback for the employee dashboard. The most common cause in
 * development is a page that was opened before the server restarted: its form
 * actions no longer exist on the new server, so the response looks unexpected.
 * Reloading fetches a fresh page.
 */
export default function Error({ error }: { error: unknown }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="card max-w-xl p-6">
      <h2 className="text-[17px] font-medium text-ink">This page needs a refresh</h2>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
        Something went wrong while loading or saving. This often happens when the page was opened before the server
        restarted. Reloading gets a fresh copy, and your data in the database is not affected.
      </p>
      <div className="mt-4 flex gap-2">
        <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
          Reload the page
        </button>
        <Link href="/" className="btn">
          Go to the dashboard
        </Link>
      </div>
    </div>
  );
}
