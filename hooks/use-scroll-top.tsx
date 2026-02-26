import { useEffect, useState } from "react";

export function useScrollTop(threshold = 10) {
  const [scrolled, setScroled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > threshold) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
