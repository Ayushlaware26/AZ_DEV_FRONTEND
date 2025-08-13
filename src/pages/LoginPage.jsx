export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => window.location.href = "/courses"}>
        Dummy Login
      </button>
    </div>
  );
}
