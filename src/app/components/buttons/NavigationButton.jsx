import Link from 'next/link';
import clsx from 'clsx';

const NavigationButton = ({ href, children, enabled = true }) => {
  return (
    <Link
      href={enabled ? href : ''}
      className={clsx(
        'px-4 py-2 rounded-lg text-white font-medium transition',
        enabled
          ? 'bg-blue-500 hover:bg-blue-600'
          : 'bg-gray-400 cursor-not-allowed pointer-events-none',
      )}
      aria-disabled={!enabled}>
      {children}
    </Link>
  );
};

export default NavigationButton;
