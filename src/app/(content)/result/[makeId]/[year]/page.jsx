import { Suspense } from 'react';

import { Loader, PageTitle, VehicleList } from '@/app/components';
import { fetchVehicles } from '@/services/api';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await fetchVehicles();
  const vehicleMakes = posts?.map(({ MakeId }) => MakeId) || [];

  return vehicleMakes.map(makeId => ({ makeId: String(makeId), year: '2025' }));
}

export default async function Page({ params }) {
  const { makeId, year } = await params;

  return (
    <>
      <PageTitle>Result page</PageTitle>
      <Suspense fallback={<Loader />}>
        <VehicleList makeId={makeId} year={year} />
      </Suspense>
    </>
  );
}
