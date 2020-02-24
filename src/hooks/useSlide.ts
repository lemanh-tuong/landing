import { useEffect, useState } from 'react';

const useSlide = (imgsLength: number, itemsShow: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [startMousePosition, setStartMousePosition] = useState(0);
  const [mousePosition, setMousePosition] = useState(0);

  const nextSlide = () => {
    if (currentSlide > imgsLength - itemsShow - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(imgsLength - itemsShow);
    }
  };

  const pickSlide = (order: number) => {
    setCurrentSlide(order);
  };

  const dragStart = (e: any) => {
    e.persist();
    setIsDragging(true);
    setStartMousePosition(e.clientX);
    setMousePosition(e.clientX);
  };

  const dragging = (e: any) => {
    if (isDragging) {
      setMousePosition(e.clientX);
    }
  };

  const dragEnd = (e: any) => {
    if (isDragging) {
      const space = e.clientX - startMousePosition;
      if (space < -50) {
        nextSlide();
      } else if (space > 50) {
        prevSlide();
      }
      setIsDragging(false);
      setMousePosition(0);
      setStartMousePosition(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return { currentSlide, startMousePosition, mousePosition, nextSlide, prevSlide, pickSlide, dragStart, dragging, dragEnd };
};
export default useSlide;
