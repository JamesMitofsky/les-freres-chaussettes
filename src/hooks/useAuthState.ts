import { useEffect, useState } from 'react';

export default function useAuthState() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    setAuthState(true);
  }, []);

  return [authState];
}
