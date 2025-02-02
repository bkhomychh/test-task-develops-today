'use client';

import { MoonLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="p-[50px]  flex justify-center md:p-[140px]">
      <MoonLoader color="#0031ff" size={60} />
    </div>
  );
};

export default Loader;
