"use client"
// preventZoom.jsx
import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.scale !== 1) {
        // Check if the user is trying to zoom
        e.preventDefault();
        const newZoom = document.body.style.zoom || 1; // Get the current zoom level or default to 1
        const maxZoom = 1; // Set the maximum allowed zoom level (in this case, preventing zoom out)
        const minZoom = 1; // Set the minimum allowed zoom level (optional, can be adjusted as needed)
        const delta = e.scale > 1 ? 0.01 : -0.01; // Adjust the delta value for zoom in/out
        
        // Prevent zooming out beyond the minimum allowed zoom level
        if (e.scale < 1 && parseFloat(newZoom) <= minZoom) {
          return;
        }

        // Prevent zooming in beyond the maximum allowed zoom level
        if (e.scale > 1 && parseFloat(newZoom) >= maxZoom) {
          return;
        }

        // Apply the zoom change
        const updatedZoom = parseFloat(newZoom) + delta;
        document.body.style.zoom = updatedZoom;
      }
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
