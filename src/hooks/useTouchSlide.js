import { useState } from "react";

function useTouchSlide() {
  const [walk, setWalk] = useState(0);
  const [direction, setDirection] = useState(null);
  const [pressed, setPressed] = useState(false);
  const [start, setStart] = useState(0);

  function handleTouchStart(e) {
    setDirection(null);
    setPressed(true);
    setStart(e.touches[0].clientX);
  }
  function handleTouchMove(e) {
    setWalk(e.touches[0].clientX - start);
  }
  function handleTouchEnd(e) {
    if (!pressed) {
      return;
    }
    const minimumWalk = 50;
    if (walk >= minimumWalk) {
      setDirection("next");
    }
    if (walk < -50) {
      setDirection("prev");
    }

    setWalk(0);
    setStart(0);
  }
  return { handleTouchStart, handleTouchMove, handleTouchEnd, direction };
}

export default useTouchSlide;
