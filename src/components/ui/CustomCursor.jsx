import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className={`custom-cursor ${visible ? "is-visible" : ""}`}>
      <span
        className="cursor-dot"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <span
        className="cursor-ring"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </div>
  );
};

export default CustomCursor;
