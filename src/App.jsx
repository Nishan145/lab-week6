import { useEffect, useState } from "react";
import upgrades from "./stores/upgrades";
import coinImg from "./assets/Coin.png";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

export default function App() {
  const [coins, setCoins] = useState(
    parseInt(localStorage.getItem("coins")) || 0
  );
  const [cps, setCps] = useState(
    parseInt(localStorage.getItem("coinsPerSecond")) || 1
  );

  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
    localStorage.setItem("coinsPerSecond", cps.toString());
  }, [coins, cps]);

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

  //try making a button component
  function buyUpgrade(upgrade) {
    if (coins >= upgrade.cost) {
      console.log("buy an upgrade", upgrade);
      setCoins((coins) => coins - upgrade.cost);
      setCps((cps) => cps + upgrade.increment);
    } else {
      console.log("not enough coins to upgrade!");
    }
  }

  function resetGame() {
    setCoins(0);
    setCps(1);
  }

  console.log("current coins", coins);
  console.log("current CPS", cps);

  return (
    <div>
      <Header className="header" />
      {/* <button onClick={addCoins}>Steal 1 Gold Coin</button> */}
      <img
        src={coinImg}
        onClick={addCoins}
        style={{ width: "170px", height: "120px" }}
      />
      <p>You have stolen {coins} coins</p>
      <p>Your&apos;e earning {cps} coins per second </p>
      <h2>Upgrade to steal Gold faster!</h2>
      {upgrades.map((upgrade, index) => (
        <div key={index}>
          <button onClick={() => buyUpgrade(upgrade)}>
            To get: {upgrade.increment} Coins per Second it will Cost:{" "}
            {upgrade.cost}
          </button>
        </div>
      ))}
      <button onClick={resetGame}>Reset</button>
      <Footer className="footer" />
    </div>
  );
}
