export const fetchVehicles = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    );

    if (!res.ok) {
      throw new Error('Failed to fetch vehicles');
    }

    const data = await res.json();
    return data.Results || [];
  } catch (error) {
    console.error('Error fetching vehicles:', error);
  }
};

export const fetchVehiclesByMakeIdAndYear = async ({ makeId, year }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    if (!res.ok) {
      throw new Error('Failed to fetch vehicles');
    }

    const data = await res.json();
    return data.Results || [];
  } catch (error) {
    console.error('Error fetching vehicles:', error);
  }
};
