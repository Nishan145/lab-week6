import { useEffect, useState } from "react";
import upgrades from "./stores/upgrades";

export default function App() {
  const [coins, setCoins] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const intervalCoins = setInterval(() => {
      setCoins((coins) => coins + cps);
    }, 1000);

    return () => {
      clearInterval(intervalCoins);
    };
  }, [cps]);

  function addCoins() {
    console.log("Adding 1 coin");
    setCoins((coins) => coins + 1);
  }

  function buyUpgrade(upgrade) {
    if (coins >= upgrade.cost) {
      console.log("buy an upgrade", upgrade);
      setCoins((coins) => coins - upgrade.cost);
      setCps((cps) => cps + upgrade.increment);
    } else {
      console.log("not enough coins to upgrade!");
    }
  }

  console.log("current coins", coins);
  console.log("current CPS", cps);

  return (
    <div>
      <h1>Gallywix's Bank heist</h1>
      <button onClick={addCoins}>Steal 1 Gold Coin</button>
      <p>You have stolen this many {coins} coins</p>
      <p>You're earning {cps} coins per second </p>
      <h2>Upgrade for faster coin gains:</h2>
      {upgrades.map((upgrade, index) => (
        <div key={index}>
          <button onClick={() => buyUpgrade(upgrade)}>
            Cost: {upgrade.cost} Toget: {upgrade.increment}x faster cookies
          </button>
        </div>
      ))}
    </div>
  );
}
