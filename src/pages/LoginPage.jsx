    import { useAuth0 } from "@auth0/auth0-react";
    import '../index.css';


    export default function LoginPage() {

      const { loginWithRedirect } = useAuth0();

      return (
        <div className="w-screen h-screen relative bg-stone-50/10 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-neutral-200 to-blue-900 border border-black" />

          {/* Header */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-3 sm:top-4 text-white text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-normal font-['Irish_Grover']">
            TextToLearn
          </div>
          <div
            className="absolute right-4 sm:right-6 md:right-8 lg:right-10 top-5 sm:top-6 md:top-7 text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-normal font-['Irish_Grover'] cursor-pointer hover:scale-105 transition-transform duration-200 bounce-after-typing z-10"
            onClick={() => { 
              loginWithRedirect();     
            }}
          >
            Get Started
          </div>
          {/* Main Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Main Heading */}
            <div className="text-white font-normal font-['Irish_Grover'] text-center leading-tight mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl typing">
                MAKING LEARNING EASIER
              </div>
            </div>

            {/* Sub Text */}
            <div className="text-white font-normal font-['Irish_Grover'] text-center leading-tight">
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl mb-2 sm:mb-4">
                Start Learning for free with
              </div>
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                help of AI
              </div>
            </div>
          </div>
        </div>
      );
    }