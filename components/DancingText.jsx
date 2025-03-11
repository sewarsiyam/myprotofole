"use client";

import React, { useState, useEffect } from "react";

const DancingText = () => {
  const text = "Front-end Developer!";
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const totalDuration = text.length * 0.4 + 1.9; // (تأخير لكل حرف * عدد الحروف) + مدة الحركة الواحدة
    const timer = setTimeout(() => {
      setAnimate(false); // أوقف الحركة مؤقتًا
      setTimeout(() => setAnimate(true), 2000); // أعد تشغيل الحركة بعد توقف قصير
    }, totalDuration * 1000);

    return () => clearTimeout(timer); // تنظيف المهلة عند إزالة المكون
  }, [animate, text.length]);

  return (
    <div
    className="justify-center xl:justify-start"
    style={{
      fontSize: "24px",
      display: "flex",
      gap: "4px",
    }}
  >
    {text.split("").map((char, i) => (
      <p
        key={i}
        style={{
          display: "inline-block",
          animationName: animate ? "dance" : "none",
          animationDuration: "1.5s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: `${i * 0.2}s`,
        }}
      >
        {char}
      </p>
    ))}
    <style jsx>{`
      @keyframes dance {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-30px);
        }
      }
    `}</style>
  </div>
  
  );
};

export default DancingText;
