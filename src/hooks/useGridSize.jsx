import { useEffect, useState } from 'react';
import useWindowSize from './useWindowSize';
import { Breakpoint } from '../constants';

/*
  The breakpoints of responsive grid follow Google chrome media queries rules
*/
const getBreakpoint = ({ width: screen }) => {
  let breakpoint = '';

  if (screen <= 320) {
    breakpoint = Breakpoint.xs;
  }
  if (screen >= 375) {
    breakpoint = Breakpoint.sm;
  }
  if (screen >= 768) {
    breakpoint = Breakpoint.md;
  }
  if (screen >= 992) {
    breakpoint = Breakpoint.lg;
  }
  if (screen >= 1200) {
    breakpoint = Breakpoint.xl;
  }
  if (screen >= 1600) {
    breakpoint = Breakpoint.xxl;
  }

  return breakpoint;
};

function useGridSize() {
  const windowSize = useWindowSize();
  const [layout, setLayout] = useState(Breakpoint.md);

  useEffect(() => {
    setLayout(getBreakpoint(windowSize));
  }, [windowSize]);
  return layout;
}

export default useGridSize;
