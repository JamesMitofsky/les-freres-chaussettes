'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation($password: String!){
    loginAdmin(password: $password) {
      accessToken
    }
  }
`

export default function Login() {
  const [login] = useMutation(LOGIN_MUTATION);
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    await login({
      variables: {
        password
      },
      onCompleted: (data) => {
        // TODO : maybe add a state for authentication
        localStorage.setItem("jwt", data.loginAdmin.accessToken)
        window.location.href = "/admin"
      },
      onError: () => {
        setPassword("")
      }
    })
  }

  return (
    <div className="m-auto flex h-full w-full max-w-sm flex-col items-start justify-center gap-10 p-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Accès Admin</h1>
        <p className="text-sm text-muted-foreground">
          Enter le mot de passe pour accéder à l'interface d'administration.
        </p>
      </div>
      <Input type="password" onChange={(input) => setPassword(input.target.value)} value={password} />
      <Button
        onClick={handleLogin}
        variant="gooeyRight"
      >
        Connexion
      </Button>
    </div>
  );
}
