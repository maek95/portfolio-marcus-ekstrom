"use client"
// preventZoom.jsx
import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    const preventZoom = (e) => {
      e.preventDefault();
      document.body.style.zoom = 0.99; // Or any other value to prevent zoom
    };

    document.documentElement.addEventListener("gesturestart", preventZoom);
    document.documentElement.addEventListener("gesturechange", preventZoom);
    document.documentElement.addEventListener("gestureend", preventZoom);

    return () => {
      document.documentElement.removeEventListener("gesturestart", preventZoom);
      document.documentElement.removeEventListener("gesturechange", preventZoom);
      document.documentElement.removeEventListener("gestureend", preventZoom);
    };
  }, []);

  return null; // This component doesn't render anything
}
