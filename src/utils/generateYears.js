export const generateYears = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 2015;

  return Array.from(Array(currentYear - startYear - 1).keys()).map(
    val => startYear + val,
  );
};
