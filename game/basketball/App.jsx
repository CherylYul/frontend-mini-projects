import React from "react";
import Score from "./components/Score";

export default function App() {
  const [isStart, setIsStart] = React.useState(false);
  const [start, setStart] = React.useState(Date.now());
  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);

  function newGame() {
    setIsStart((prev) => !prev);
    setStart(Date.now());
  }

  function getTime() {
    if (isStart) {
      const time = Date.now() - start;
      setMin(Math.floor((time / 1000 / 60) % 60));
      setSec(Math.floor((time / 1000) % 60));
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <div className="center-container">
        <div className="new-game">
          <button onClick={newGame}>NEW GAME</button>
          <div className="timer">{isStart ? `${min}:${sec}` : "00 : 00"}</div>
        </div>
        <div className="score">
          <Score size="large-btn" leader="Anna" status={isStart}>
            Home
          </Score>
          <Score size="large-btn" leader="Eric" status={isStart}>
            Guest
          </Score>
        </div>
        <div className="foul">
          <Score size="small-btn" status={isStart}>
            Fouls
          </Score>
          <Score size="small-btn" status={isStart}>
            Fouls
          </Score>
        </div>
      </div>
    </div>
  );
}
