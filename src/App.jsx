import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const myInterval = useRef(null);

  const clickEventListener = () => {
    myInterval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopEventHandle = () => {
    clearInterval(myInterval.current);
  };

  const resetEventHandle = () => {
    clearInterval(myInterval.current);
    setCount(0);
  };

  return (
    <div className="flex justify-center flex-col items-center mt-32">
      <h1 className="text-3xl text-white tracking-wide">
        The value is <span className="ml-2">{count}</span>
      </h1>
      <div>
        <button
          className="bg-green-700 text-white px-4 py-1 text-xl rounded mt-4 tracking-wider"
          onClick={clickEventListener}
        >
          Start
        </button>

        <button
          className="bg-white text-black px-4 py-1 text-xl rounded mt-4 tracking-wider ml-4"
          onClick={stopEventHandle}
        >
          Stop
        </button>

        <button
          className="bg-red-700 text-white px-4 py-1 text-xl rounded mt-4 tracking-wider ml-4"
          onClick={resetEventHandle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
