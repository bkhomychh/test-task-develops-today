const VehicleCard = ({ data = {} }) => {
  const { Make_ID, Make_Name, Model_ID, Model_Name } = data;

  return (
    <li className="bg-white shadow-lg rounded-xl p-4 w-80 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{Make_Name}</h2>
      <p className="text-gray-500 text-sm mt-1">ID: {Make_ID}</p>
      <p className="text-gray-600 mt-2">Model: {Model_Name}</p>
      <p className="text-gray-500 text-sm mt-1">Model ID: {Model_ID}</p>
    </li>
  );
};

export default VehicleCard;
