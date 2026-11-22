
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://montassar-portfolio-alpha.vercel.app";



export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const title =
    lang === "fr"
      ? "Montassar Hannachi | Cloud, DevOps & Administration Système"
      : "Montassar Hannachi | Cloud, DevOps & System Administration";

  const description =
    lang === "fr"
      ? "Découvrez les projets de Montassar Hannachi en Cloud, DevOps, Linux, OpenStack, Docker, Kubernetes et GitOps."
      : "Explore Montassar Hannachi's projects in Cloud, DevOps, Linux, OpenStack, Docker, Kubernetes and GitOps.";
  return {
    metadataBase: new URL(siteUrl),
    verification: {
      google: "XjErATo-ZxfMOJhgUc7qwtOfNoHP6mEUt1mGRw1MigQ",
    },
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      type: "website",
      siteName: "Montassar Hannachi Portfolio",
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <Script id="theme-init" strategy="beforeInteractive">
        {`try {
          const theme = localStorage.getItem("portfolio-theme");
          document.documentElement.dataset.theme =
            theme === "light" ? "light" : "dark";
        } catch {}`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
