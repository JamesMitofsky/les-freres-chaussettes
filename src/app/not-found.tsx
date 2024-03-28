import Link from 'next/link';

import TypographyH1 from '@/components/typography/TypographyH1';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="m-5 flex h-full flex-col items-center justify-center gap-10 pb-40">
      <TypographyH1 text="Page non trouvée" />
      <p>Désolé ! Nous n'avons pas réussi à trouver cette page.</p>

      <Link href="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
