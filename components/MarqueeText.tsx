"use client";

import { useEffect, useRef } from "react";
import styles from "./MarqueeText.module.css";

function useMarquee(ref: React.RefObject<HTMLDivElement>, speed: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.children) as HTMLElement[];
    const half = items.length / 2;
    const unitWidth = items
      .slice(0, half)
      .reduce((sum, node) => sum + node.offsetWidth, 0);

    let pos = speed > 0 ? 0 : -unitWidth;
    let raf: number;

    function tick() {
      pos -= speed;
      if (speed > 0 && pos <= -unitWidth) pos += unitWidth;
      if (speed < 0 && pos >= 0) pos -= unitWidth;
      el!.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref, speed]);
}

export function MarqueeText() {
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  useMarquee(row1 as React.RefObject<HTMLDivElement>,  1.5);
  useMarquee(row2 as React.RefObject<HTMLDivElement>, -1.5);

  const line1 = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className={`${styles.chunk} ${styles.r1}`}>
      <span className={styles.w}>FETAN LED&nbsp;</span>
      <span className={styles.c}>SCREEN</span>
    </span>
  ));

  const line2 = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className={`${styles.chunk} ${styles.r2}`}>
      <span className={styles.c}>SALES AND&nbsp;</span>
      <span className={styles.w}>INSTALLATION</span>
    </span>
  ));

  return (
    <section className={styles.wrapper} aria-label="Marquee">
      <div className={styles.lane}>
        <div ref={row1} className={styles.inner}>{line1}</div>
      </div>
      <div className={styles.lane}>
        <div ref={row2} className={styles.inner}>{line2}</div>
      </div>
    </section>
  );
}
