import { breakpoint } from 'components/Carousel/Carousel';
import { useCallback, useEffect, useState } from 'react';

const useSlide = (imgsLength: number, responsive?: breakpoint, itemShow?: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState(itemShow ?? 2);
  const [animated, setAnimated] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartMousePosition] = useState(0);
  const [nowPosition, setMousePosition] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide > imgsLength - items - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, imgsLength, items]);

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(imgsLength - items);
    }
  };

  const pickSlide = (order: number) => {
    setCurrentSlide(order);
  };

  const dragStart = (e: any) => {
    e.persist();
    setAnimated(false);
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
      const space = e.clientX - startPosition;
      setAnimated(true);
      if (space < -50 && currentSlide < imgsLength - items) {
        nextSlide();
      } else if (space > 50 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      setIsDragging(false);
      setMousePosition(0);
      setStartMousePosition(0);
    }
  };



  useEffect(() => {
    const handleResize = () => {
      if (responsive) {
        if(responsive['576px'] && window.innerWidth >= 576 && window.innerWidth < 768) {
          setItems(responsive?.['576px']);
        } else if(responsive['768px'] && window.innerWidth >= 768 && window.innerWidth < 992) {
          setItems(responsive?.['768px']);
        } else if(responsive['992px'] && window.innerWidth >= 992 && window.innerWidth < 1200) {
          setItems(responsive?.['992px']);
        } else if(responsive['1200px'] && window.innerWidth >= 1200) {
          setItems(responsive?.['1200px']);
        }
      }
    };
    const interval = setInterval(nextSlide, 10000);
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
    };
  }, [items, animated, currentSlide, nextSlide, responsive]);

  return { items, nowPosition, startPosition, animated, currentSlide, nextSlide, prevSlide, pickSlide, dragStart, dragEnd, dragging };
};
export default useSlide;
