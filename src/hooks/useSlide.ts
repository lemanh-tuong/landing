import { breakpoint } from 'components/Carousel/Carousel';
import { useCallback, useEffect, useState } from 'react';
import { useMount } from './useMount';

const useSlide = (imgsLength: number, itemShow: number, responsive?: breakpoint) => {
  const [items, setItems] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartMousePosition] = useState(0);
  const [nowPosition, setMousePosition] = useState(0);
  const [reseting, setResetting] = useState(false);
  const nextSlide = useCallback(() => {
    setAnimated(true);
    if (currentSlide > imgsLength - 2) {
      setCurrentSlide(currentSlide + 1);
      setResetting(true);
      setTimeout(() => {
        setAnimated(false);
        setCurrentSlide(currentSlide + 1 - imgsLength);
        setResetting(false);
      }, 300);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, imgsLength]);

  const prevSlide = () => {
    setAnimated(true);
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
      setResetting(true);
      setTimeout(() => {
        setAnimated(false);
        setCurrentSlide(currentSlide + imgsLength - 1);
        setResetting(false);
      }, 300);
    }
  };

  const pickSlide = (order: number) => {
    setCurrentSlide(order);
  };

  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!reseting) {
      setAnimated(false);
      setIsDragging(true);
      setStartMousePosition(e.clientX);
      setMousePosition(e.clientX);
    }
  };

  const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging && !reseting) {
      setMousePosition(e.clientX);
    }
  };

  const dragEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging && !reseting) {
      const space = e.clientX - startPosition;
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
      if(responsive['1200px'] && window.innerWidth >= 1200) {
        setItems(responsive?.['1200px']);
      } else if(responsive['992px'] && window.innerWidth >= 992) {
        setItems(responsive?.['992px']);
      } else if(responsive['768px'] && window.innerWidth >= 768) {
        setItems(responsive?.['768px']);
      } else if(responsive['576px'] && window.innerWidth >= 576) {
        setItems(responsive?.['576px']);
      } else if(window.innerWidth <= 576) {
        setItems(1);
      }
    }
  }, [responsive]);

  useEffect(() => {
    setItems(itemShow);
  }, [itemShow]);

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

  useMount(() => {
    handleResize();
  });

  return { items, nowPosition, startPosition, animated, currentSlide, nextSlide, prevSlide, pickSlide, dragStart, dragEnd, dragging };
};
export default useSlide;
