import React, { useState, useEffect, useRef } from "react";

const LazyLoad = ({ children, placeholderHeight = "200px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 200px 0px", // Trigger when 200px away from viewport bottom
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={placeholderRef}
      style={{ minHeight: !isVisible ? placeholderHeight : "auto" }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;
