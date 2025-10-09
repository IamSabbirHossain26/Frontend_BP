import { useEffect, useState } from "react";

export default function Countdown({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    let lastUpdate = performance.now();
    const duration = 500; // total animation time in ms
    const step = () => {
      const now = performance.now();
      const progress = Math.min((now - lastUpdate) / duration, 1);
      current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target); // ensure it ends exactly at target
      }
    };

    requestAnimationFrame(step);
  }, [target]);

  return (
    <div className="">
      {count}
    </div>
  );
}
