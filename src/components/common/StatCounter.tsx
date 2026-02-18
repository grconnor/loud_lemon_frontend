'use client';

import { useEffect, useRef } from 'react';
import { animate, useMotionValue, useInView } from 'motion/react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const StatCounter = ({
  value,
  suffix = '',
  duration = 1,
}: StatCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeOut',
      onUpdate: latest => {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest) + suffix;
        }
      },
    });

    return controls.stop;
  }, [isInView, value, duration, suffix, motionValue]);

  return <span ref={ref}>0{suffix}</span>;
};

export default StatCounter;
