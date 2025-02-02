'use client';

import { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks';
import clsx from 'clsx';

const Select = ({ label, data = [], currentOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  useClickOutside({
    containerRef,
    shouldHandleClickOutside: isOpen,
    onClickOutside: () => closeDropdown(),
  });

  const closeDropdown = () => setIsOpen(false);
  const handleSelect = val => {
    onSelect(val);
    closeDropdown();
  };

  return (
    <div className="relative mb-4 ">
      <span className="block text-gray-700 font-medium mb-2">{label}</span>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(state => !state)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
          {currentOption?.label || 'Choose option'}
        </button>

        {isOpen && data?.length > 0 && (
          <ul className="absolute left-0 top-full w-full max-h-80 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-y-auto overflow-x-hidden">
            {data?.map?.(item => (
              <li
                key={item.id}
                className={clsx(
                  'px-4 py-2 cursor-pointer',
                  item.id === currentOption?.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100',
                )}
                onClick={() => handleSelect(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
