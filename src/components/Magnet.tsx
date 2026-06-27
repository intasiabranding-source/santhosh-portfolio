import React, { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - elementCenterX;
    const distanceY = mouseY - elementCenterY;

    // Check if mouse is within element bounds + padding
    const maxThresholdX = rect.width / 2 + padding;
    const maxThresholdY = rect.height / 2 + padding;

    if (Math.abs(distanceX) < maxThresholdX && Math.abs(distanceY) < maxThresholdY) {
      setTransition(activeTransition);
      const moveX = distanceX / strength;
      const moveY = distanceY / strength;
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0px)`);
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0px)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
