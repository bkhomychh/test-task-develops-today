import { NothingFoundMessage, VehicleCard } from '@/app/components';
import { fetchVehiclesByMakeIdAndYear } from '@/services/api';

const VehicleList = async ({ makeId, year }) => {
  const vehicles = await fetchVehiclesByMakeIdAndYear({ makeId, year }).catch(
    err => console.log(err),
  );

  return vehicles?.length ? (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {vehicles?.map(vehicle => (
        <VehicleCard key={vehicle.Model_ID} data={vehicle} />
      ))}
    </ul>
  ) : (
    <NothingFoundMessage />
  );
};

export default VehicleList;
