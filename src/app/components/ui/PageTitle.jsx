const PageTitle = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
      {children}
    </h1>
  );
};

export default PageTitle;
