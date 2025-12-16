import type { ReactNode } from "react";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

/**
 * A provider wrapping the whole app.
 *
 * You can add multiple providers here by nesting them,
 * and they will all be applied to the app.
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.title = "Localserv.ai";

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/Local Serv-favicon_whitebackground.jpg";
  }, []);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="vRhOc7O-ypjC256W-0umKyG5Q2ha6I_kRC6-jYCagC0"
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-background font-['Inter']">
        {children}
      </div>
      <Toaster position="top-right" richColors />
    </>
  );
};
