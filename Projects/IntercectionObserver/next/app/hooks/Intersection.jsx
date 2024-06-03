"use client";

import { useRef, useEffect } from "react";

const defaultOptions = {
  className: ['__default'],
  unobserve: false,
  observerOptions: {
    threshold: 0.5,
    root: null,
    rootMargin: "0px 0px 0px 0px"
  }
}

export default function Intersection(ref, options = defaultOptions) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        options.className.forEach((className) => {
          entry.target.classList.toggle(className, entry.isIntersecting)
        })
        if (options.unobserve && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      })
    }, options.observerOptions)
    observer.observe(ref.current)
  }, [])
}