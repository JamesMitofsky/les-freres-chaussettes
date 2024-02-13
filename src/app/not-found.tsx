import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="m-5 flex h-full flex-col items-center justify-center gap-10 pb-40">
      <h1>Page non trouvée</h1>
      <p>Désolé ! Nous n'avons pas réussi à trouver cette page.</p>

      <Link href="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
