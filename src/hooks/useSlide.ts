import { breakpoint } from 'components/Carousel/Carousel';
import { useCallback, useEffect, useState } from 'react';

const useSlide = (imgsLength: number, itemShow: number, responsive?: breakpoint) => {
  const [items, setItems] = useState(itemShow);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartMousePosition] = useState(0);
  const [nowPosition, setMousePosition] = useState(0);
  const nextSlide = useCallback(() => {
    if(items > 1) {
      if (currentSlide > imgsLength - 2) {
        setCurrentSlide(currentSlide + 1);
        setTimeout(() => {
          setAnimated(false);
          setCurrentSlide(0);
        }, 500);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    } else {
      if (currentSlide > imgsLength - items - 1) {
        setCurrentSlide(currentSlide + 1);
        setTimeout(() => {
          setAnimated(false);
          setCurrentSlide(0);
        }, 500);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  }, [currentSlide, imgsLength, items]);

  const prevSlide = () => {
    if(items > 1) {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
        setTimeout(() => {
          setAnimated(false);
          setCurrentSlide(imgsLength - 1);
        }, 500);
      }
    } else {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
        setTimeout(() => {
          setAnimated(false);
          setCurrentSlide(imgsLength - items);
        }, 500);
      }
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


  const handleResize = useCallback(() => {
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
  }, [responsive]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    if(responsive) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [items, animated, currentSlide, nextSlide, responsive, handleResize]);
  return { items, nowPosition, startPosition, animated, currentSlide, nextSlide, prevSlide, pickSlide, dragStart, dragEnd, dragging };
};
export default useSlide;
