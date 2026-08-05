import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomePage from "@/pages/home";
import FeaturesPage from "@/pages/features";
import IndustriesPage from "@/pages/industries";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import DesignKitDemo from "@/pages/_design";

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0 });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <RouteScroll />
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
