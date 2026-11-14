"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitcher({
  locale,
}: {
  locale: Locale;
}) {
  const otherLocale = locale === "fr" ? "en" : "fr";

  return (
    <div aria-label="Language selector">
      <Link
        href={`/${locale}`}
        aria-current="page"
      >
        {locale.toUpperCase()}
      </Link>
      {" / "}
      <Link href={`/${otherLocale}`}>
        {otherLocale.toUpperCase()}
      </Link>
    </div>
  );
}
