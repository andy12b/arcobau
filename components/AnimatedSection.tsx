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

    // Check if element is already in viewport (above fold) - don't animate
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

    if (inViewport && rect.top < 0) {
      // Element is above fold, skip animation
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

    return () => {
      tween.kill();
    };
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
