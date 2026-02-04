import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use 'instant' because 'smooth' can sometimes interfere
    // with page entrance animations (like your Framer Motion fades)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]); // Fires every time the URL path changes

  return null;
};

export default ScrollToTop;
