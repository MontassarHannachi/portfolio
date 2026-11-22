"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/i18n/config";

type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-theme-change", callback);

  return () => {
    window.removeEventListener("portfolio-theme-change", callback);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  const label =
    locale === "fr"
      ? theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"
      : theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span>
        {locale === "fr"
          ? theme === "dark" ? "Clair" : "Sombre"
          : theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
