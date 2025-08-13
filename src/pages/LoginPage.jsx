import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>
        Login with Auth0
      </button>
    </div>
  );
}
