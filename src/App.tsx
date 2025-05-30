
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Queue from "./pages/Queue";
import Analytics from "./pages/Analytics";
import Composer from "./pages/Composer";
import Engagement from "./pages/Engagement";
import MediaLibrary from "./pages/MediaLibrary";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animation observer for scroll animations
const AnimationObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimationObserver />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/composer" element={<Composer />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/media-library" element={<MediaLibrary />} />
            <Route path="/settings/*" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
