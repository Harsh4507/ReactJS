import { useState } from "react";

const App3 = () => {
  const [Display, SetDisplay] = useState(true);
  const [Count, SetCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          SetDisplay(!Display);
        }}
      >
        Toggle Display
      </button>
      {Display ? <p>Displaying content</p> : null}<br/>
      <button onClick={() => SetCount(Count + 1)}>+</button>
      <button onClick={() => SetCount(Count - 1)}>-</button>
      <button onClick={() => SetCount(0)}>Reset</button>
      {Count == 0 ? (
        <p>Count is Currently 0</p>
      ) : Count % 2 == 0 ? (
        <p>Count is Even</p>
      ) : (
        <p>Count is Odd</p>
      )}
    </div>
  );
};

export default App3;
