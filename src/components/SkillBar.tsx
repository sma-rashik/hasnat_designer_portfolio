"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  colorClass: string;
}

export default function SkillBar({ name, percentage, colorClass }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="space-y-2" ref={ref}>
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-semibold">{name}</span>
        <span className={`${colorClass.split(" ")[2] || "text-white"} font-bold`}>{percentage}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}
