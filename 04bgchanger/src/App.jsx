import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen"
      style={{backgroundColor:color}}
    >
      <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2">
        <div className="bg-white rounded-full px-2 py-2 flex flex-wrap gap-3">
          <button
            onClick={()=>setColor("black")}
            className="bg-black text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            black
          </button>
          <button
            onClick={()=>setColor("green")}
            className="bg-green-400 text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            Green
          </button>
          <button
            onClick={()=>setColor("yellow")}
            className="bg-yellow-400 text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            black
          </button>
          <button
            onClick={()=>setColor("gray")}
            className="bg-gray-400 text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            Green
          </button>
          <button
            onClick={()=>setColor("red")}
            className="bg-red-400 text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            black
          </button>
          <button
            onClick={()=>setColor("blue")}
            className="bg-blue-400 text-white rounded-3xl px-2 py-1 shadow-lg"
          >
            Green
          </button>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
