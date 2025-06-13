import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "Estudio Casa Brava - Página no encontrada",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}