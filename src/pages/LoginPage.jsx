import { useAuth0 } from "@auth0/auth0-react";
import '../index.css';
export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="relative w-screen h-screen bg-emerald-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-indigo-800 to-indigo-800 border border-black" />

      <div className="absolute top-4 left-4 text-white text-3xl md:text-4xl font-normal font-['Irish_Grover']">
        TextToLearn
      </div>

      <div className="absolute top-4 right-4 text-white text-3xl md:text-4xl font-normal font-['Irish_Grover'] cursor-pointer bounce-after-typing" onClick={() => loginWithRedirect()}>
        Get Started
      </div>

      <div className="absolute top-[20%] left-1/12 right-1/12 text-white text-6xl md:text-9xl font-normal font-['Irish_Grover'] text-center animate-bounce typing">
        MAKING LEARNING EASIER
      </div>

      <div className="absolute top-[55%] left-1/12 right-1/12 text-white text-4xl md:text-8xl font-normal font-['Irish_Grover'] text-center">
        Start Learning for free with
      </div>

      <div className="absolute top-[70%] left-1/3 right-1/3 text-white text-4xl md:text-8xl font-normal font-['Irish_Grover'] text-center">
        help of AI
      </div>
    </div>
  );
}