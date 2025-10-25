import { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  threshold?: number;
  className?: string;
}>;

const Reveal = ({ as = "div", threshold = 0.2, className, children }: RevealProps) => {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`${className ?? ""} reveal ${visible ? "reveal-visible" : ""}`.trim()}>
      {children}
    </Tag>
  );
};

export default Reveal;


