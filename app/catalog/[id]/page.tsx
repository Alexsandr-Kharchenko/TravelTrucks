import { getCamperById } from '@/lib/api/api';
import CamperDetails from '@/components/CamperDetails/CamperDetails';

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function CamperPage({ params }: PageProps) {
  // Якщо params це проміс, розпаковуємо його
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Отримуємо дані про кемпер
  const camper = await getCamperById(id);

  if (!camper) return <p>Camper not found</p>;

  return <CamperDetails camper={camper} />;
}
