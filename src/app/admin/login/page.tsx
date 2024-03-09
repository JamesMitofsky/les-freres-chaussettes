'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  return (
    <div className="m-auto flex h-full w-full max-w-sm flex-col items-start justify-center gap-10 p-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Accès Admin</h1>
        <p className="text-sm text-muted-foreground">
          Enter le mot de passe pour accéder à l'interface d'administration.
        </p>
      </div>
      <Input />
      <Button
        onClick={() => console.log('Sign in clicked')}
        variant="gooeyRight"
      >
        Connecter
      </Button>
    </div>
  );
}
