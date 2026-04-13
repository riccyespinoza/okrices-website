import CustomCursor from "@/components/shared/CustomCursor";
import SkipToContent from "@/components/shared/SkipToContent";
import MainLayout from "@/components/MainLayout";
import Script from "next/script";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { ThemeProvider } from "@/context/ThemeContext";

export default function MarketingLayout({ children, params }) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  return (
    <>
      <SkipToContent />
      <ThemeProvider>
        {enableAnalytics && (
          <Script
            strategy="afterInteractive"
            data-domain="okrices.com"
            src="https://plausible.io/js/script.tagged-events.js"
          />
        )}
        <div className="background-exact with-noise" aria-hidden="true" />
        <MainLayout>{children}</MainLayout>
        <ScrollToTopButton />
        <CustomCursor />
      </ThemeProvider>
    </>
  );
}
