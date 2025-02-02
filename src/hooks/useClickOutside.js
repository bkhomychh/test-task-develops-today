import { useEffect } from 'react';

export const useClickOutside = ({
  containerRef,
  shouldHandleClickOutside = true,
  onClickOutside,
}) => {
  useEffect(() => {
    if (!shouldHandleClickOutside) return;

    const handleClickOutside = event => {
      if (!containerRef.current?.contains(event.target)) {
        onClickOutside?.();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [shouldHandleClickOutside]);
};
