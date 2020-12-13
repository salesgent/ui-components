import { useEffect, useState } from 'react';
import debounce from '../utils/debounce';

function useWindowSize() {
  const isWindow = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isWindow ? window.innerWidth : 1200,
    height: isWindow ? window.innerHeight : 800,
  });

  useEffect(() => {
    const onWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const onResize = debounce(onWindowResize, 100);

    window.addEventListener('resize', onResize);
    onWindowResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
