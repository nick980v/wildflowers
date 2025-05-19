// components/FroebelTimeline.tsx

"use client";

import { useState, useEffect, useRef } from "react";

export default function Timeline({ timelineItems, dotColor }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolledIndex, setScrolledIndex] = useState(null);
  const itemRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Effect for scroll highlighting
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Define your mobile breakpoint

    if (!isMobile) {
      // If not mobile, reset scrolledIndex and don't set up observer
      setScrolledIndex(null);
      return; /* Exit the effect */
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setScrolledIndex((prevIndex) =>
              prevIndex === null ? index : Math.max(prevIndex, index)
            );
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px 0px -50% 0px", // Adjust the bottom margin to trigger when the top of the element hits the vertical center
        threshold: 0, // Trigger as soon as any part of the element is visible within the modified root margin
      }
    );

    // Observe each timeline item
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup function to disconnect observer
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="relative text-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative z-0">
        {/* Horizontal Line */}
        <div
          className="absolute  left-0 right-0 h-0.5 bg-[#4C6E3DBF]"
          style={{ top: "0.45rem" }}
        ></div>

        {timelineItems.map((item, index) => {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          const isActiveByHover =
            hoveredIndex !== null && index <= hoveredIndex;
          const isActiveByScrollOnMobile =
            isMobile && scrolledIndex !== null && index <= scrolledIndex;
          const isCurrentlyActive =
            index === 0 || isActiveByHover || isActiveByScrollOnMobile;

          return (
            <div
              key={index}
              ref={(el) =>
                (itemRefs.current[index] = el)
              } /* Assign ref to item */
              data-index={index} /* Add data-index for observer */
              className="flex flex-col max-w-xs relative z-10 group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                  isCurrentlyActive
                    ? `bg-[${dotColor}] border-transparent`
                    : "bg-[#4C6E3D] border-2"
                } group-hover:bg-[${dotColor}] group-hover:border-transparent`}
              ></div>

              {/* Content */}
              <div className="mt-6">
                <p
                  className={`text-sm mt-2 leading-6 font-normal transition-colors duration-200 ${
                    isCurrentlyActive ? "text-[#FFFCFA]" : "text-[#4C6E3D]"
                  } group-hover:text-[#FFFCFA]`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
