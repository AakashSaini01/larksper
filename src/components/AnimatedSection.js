import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ children, animation = "fade-up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0 translate-y-10";

    switch (animation) {
      case "fade-up":
        return "opacity-100 translate-y-0";
      case "fade-down":
        return "opacity-100 -translate-y-0";
      case "fade-left":
        return "opacity-100 -translate-x-0";
      case "fade-right":
        return "opacity-100 translate-x-0";
      case "zoom-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100";
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-10";
      case "fade-down":
        return "opacity-0 -translate-y-10";
      case "fade-left":
        return "opacity-0 translate-x-10";
      case "fade-right":
        return "opacity-0 -translate-x-10";
      case "zoom-in":
        return "opacity-0 scale-95";
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${getInitialClass()} ${
        isVisible ? getAnimationClass() : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
