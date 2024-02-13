import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>Page non trouvée</h1>
      <p>Désolé ! Nous n'avons pas réussi à trouver cette page.</p>

      <Link href="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
