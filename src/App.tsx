import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollMotion from "@/components/scroll-motion";
import HomePage from "@/pages/home";
import FeaturesPage from "@/pages/features";
import IndustriesPage from "@/pages/industries";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import DesignKitDemo from "@/pages/_design";

function RouteScroll() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const frame = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });

      return () => cancelAnimationFrame(frame);
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <RouteScroll />
        <ScrollMotion />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/_design" element={<DesignKitDemo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
