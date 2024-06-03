"use client";

import { useEffect, useRef } from 'react';
import Intersection from './hooks/Intersection';

export default function Home() {
  const ref = useRef(null);
  Intersection(ref, { className: ["show", "off"] })
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle('show', entry.isIntersecting);
  //       // if (entry.isIntersecting) observer.unobserve(entry.target);
  //     })
  //   })

  //   observer.observe(ref.current);
  // }, [])

  return (
    <div className="home">
      <h1>Intersection</h1>
      <section className="section">
        <h2>Section1</h2>
      </section>
      <section className="section">
        <h2>Section2</h2>
      </section>
      <section className="section">
        <h2>Section3</h2>
      </section>
      <section className="section">
        <h2>Section4</h2>
      </section>
      <section className="section">
        <h2>Section5</h2>
      </section>
      <section ref={ref} className="section section6">
        <h2>Section6</h2>
      </section>
    </div>
  );
}