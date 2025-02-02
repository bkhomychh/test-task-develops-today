import { Suspense } from 'react';

import { Loader, PageTitle, VehicleList } from '@/app/components';
import { generateYears } from '@/utils';
import { fetchVehicles } from '@/services/api';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await fetchVehicles();

  const vehicleMakes = posts?.map(({ MakeId }) => MakeId) || [];
  const years = generateYears();

  return vehicleMakes.flatMap(makeId =>
    years.map(year => ({ makeId: String(makeId), year: String(year) })),
  );
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
