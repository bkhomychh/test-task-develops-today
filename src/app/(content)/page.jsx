'use client';

import { useEffect, useMemo, useState } from 'react';

import { NavigationButton, PageTitle, Select } from '@/app/components';
import { generateYears } from '@/utils';
import { fetchVehicles } from '@/services/api';

export default function Page() {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  const vehicleMakeOptions = useMemo(() => {
    return vehicles?.map(({ MakeId, MakeName }) => ({
      id: MakeId,
      label: MakeName,
    }));
  }, [vehicles]);

  const yearOptions = useMemo(() => {
    const years = generateYears();
    return years.map(year => ({ id: year, label: year }));
  }, []);

  useEffect(() => {
    fetchVehicles().then(data => setVehicles(data));
  }, []);

  return (
    <>
      <PageTitle>Home page</PageTitle>

      <Select
        currentOption={selectedMake}
        data={vehicleMakeOptions}
        onSelect={setSelectedMake}
      />
      <Select
        currentOption={selectedYear}
        data={yearOptions}
        onSelect={setSelectedYear}
      />

      <NavigationButton
        href={`/result/${selectedMake?.id}/${selectedYear?.id}`}
        enabled={Boolean(selectedMake && selectedYear)}>
        Next
      </NavigationButton>
    </>
  );
}
