"use client";

import { useEffect, useState } from "react";

const Service = () => {
  const [mainData, setMainData] = useState("");
  const [hideAns, setHideAns] = useState(null);
  const url = "https://official-joke-api.appspot.com/random_joke";
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMainData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center">
      {mainData && (
        <div className="w-80 h-82 bg-white rounded-sm text-center text-black border-1 px-5 pt-4 border-yellow-300 flex flex-col gap-5">
          <h1 className="font-bold text-xl">Random Joke Generator</h1>
          <p className="border-b-4 text-sm rounded-2xl border-red-600">
            {mainData.setup}
          </p>
          {hideAns && (
            <p className=" w-auto px-2 mx-auto h-auto py-2 pt-2 bg-amber-100 border-1 border-yellow-400 rounded-sm ">
              {mainData.punchline}😂
            </p>
          )}
          <button
            className={`${
              hideAns ? "bg-gray-600" : "bg-amber-500"
            } px-4 h-11 text-white font-bold cursor-pointer rounded-sm`}
            onClick={() => setHideAns((p) => !p)}
          >
            {hideAns ? "Hide Puncline" : "Show Puncline"}
          </button>
          <button
            className="bg-amber-300 text-white font-bold block mx-auto border-1 border-yellow-500 px-3 h-7 cursor-pointer rounded-sm"
            onClick={() => fetchData()}
          >
            Next
          </button>

          <h1>Joke Id: {mainData.id}</h1>
        </div>
      )}
    </div>
  );
};

export default Service;
