export default function Admin() {
  const adminAuthState: boolean = useAuthState();

  if (!adminAuthState) return <Redirect to="/admin/login" />;

  return (
    <>cooucou</>
  );
}
