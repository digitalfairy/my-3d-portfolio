import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none 
      flex flex-col items-center justify-center bg-slate-950 
      ${started ? "opacity-0" : "opacity-100"}`}
    >
      {/* Name Container */}
      <div className="text-4xl md:text-9xl font-black text-white relative tracking-tighter">
        {/* Animated Gradient Fill */}
        <div
          className="absolute left-0 top-0 overflow-hidden truncate transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
          }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-700">
            Anita Jelic
          </span>
        </div>
        
        {/* Background Ghost Text */}
        <div className="opacity-10">Anita Jelic</div>
      </div>

      {/* Progress Counter */}
      <div className="mt-8 text-indigo-500 font-mono font-bold tracking-widest text-sm">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};