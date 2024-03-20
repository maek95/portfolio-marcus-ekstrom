"use client"
// preventZoom.jsx
// preventZoom.jsx
import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    const handleGestureStart = (e) => {
      if (e.scale !== 1) {
        e.preventDefault();
      }
    };

    document.documentElement.addEventListener("gesturestart", handleGestureStart);

    return () => {
      document.documentElement.removeEventListener("gesturestart", handleGestureStart);
    };
  }, []);

  return null; // This component doesn't render anything
}
