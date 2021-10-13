import { useState } from 'react';
import { useInterval } from './customHooks/UseInterval';

const DelayedRender = ({ children, delay = 2500 }) => {
  const [isShown, setIsShown] = useState(false);

  useInterval(() => {
    setIsShown(true);
  }, delay)
  return isShown ? children : null;

}

export default DelayedRender
