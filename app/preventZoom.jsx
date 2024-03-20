"use client"
import { useEffect } from "react";

export default function PreventZoom() {

  useEffect(() => {

    document.documentElement.addEventListener('touchmove', function (event) {
      if (event.scale !== 1) { event.preventDefault(); }
    }, false);
  }, [])
}