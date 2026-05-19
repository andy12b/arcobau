"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Skip animation for elements already visible in the viewport on load
    if (alreadyVisible) {
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
        once: true,
      },
    };

    switch (animation) {
      case "fade-up":
        fromVars.y = 50;
        toVars.y = 0;
        break;
      case "slide-left":
        fromVars.x = -50;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = 50;
        toVars.x = 0;
        break;
      case "scale-in":
        fromVars.scale = 0.92;
        toVars.scale = 1;
        break;
      case "fade-in":
      default:
        break;
    }

    const tween = gsap.fromTo(el, fromVars, toVars);

    // Refresh ScrollTrigger positions after all assets (images) have loaded
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      tween.kill();
      window.removeEventListener("load", onLoad);
    };
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
