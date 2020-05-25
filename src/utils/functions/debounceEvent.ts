export const debounce = (callback: any, wait: number) => {
  let timeout: NodeJS.Timeout ;
  return (...args: any) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};
