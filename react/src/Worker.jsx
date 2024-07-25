import React, { useState, useEffect } from 'react';

export const WorkerComponent = () => {
  const [worker, setWorker] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const newWorker = new Worker(new URL('./worker.js', import.meta.url));
    newWorker.onmessage = (e) => {
      setResult(e.data);
    };

    setWorker(newWorker);

    return () => {
      newWorker.terminate();
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCalculate = () => {
    worker.postMessage(Number(inputValue));
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};
