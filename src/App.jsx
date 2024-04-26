import { useEffect, useState } from "react";
import upgrades from "./stores/upgrades";
import coinImg from "./assets/Coin.png";

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
      <p>Click to Steal Gold Coins</p>
      {/* <button onClick={addCoins}>Steal 1 Gold Coin</button> */}
      <img src={coinImg} onClick={addCoins} />
      <p>You have stolen this many {coins} coins</p>
      <p>You're earning {cps} coins per second </p>
      <h2>Upgrade for faster coin gains:</h2>
      {upgrades.map((upgrade, index) => (
        <div key={index}>
          <button onClick={() => buyUpgrade(upgrade)}>
            To get:{upgrade.increment} it will Cost: {upgrade.cost}
          </button>
        </div>
      ))}
    </div>
  );
}
