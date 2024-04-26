import { useState } from "react";

export default function App() {
  const [coins, setCoins] = useState(0);
  const [cps, setCps] = useState(1);

  function addCoins() {
    setCoins((coins) => coins + 1);
  }

  function buyUpgrade() {
    setCps((cps) => cps + 1);
  }

  return (
    <div>
      <h1>Gallywix's Bank heist</h1>
      <button onClick={addCoins}>Get a Coin</button>
      <button onClick={buyUpgrade}>I need Moar Coins</button>
      <p>You have stolen this many {coins} coins</p>
      <p>You get this many {coins} coins per second </p>
    </div>
  );
}
