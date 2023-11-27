import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

interface hookProps {
  maxCounter?: number;
}

export const useCounter = ({ maxCounter = 1 }: hookProps) => {
  const [counter, setcounter] = useState(5);

  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    /* if (counter >= MAXIMUM_COUNT) return;
    setcounter((prev) => prev + 1); */
    setcounter((prev) => Math.min(prev + 1, maxCounter));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  });

  useEffect(() => {
    //if(counter < maxCounter) return;
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
