import axios from "axios"
import { useEffect, useState } from "react"
import OneGameResult from "./OneGameResult";

export default function GameResult({ matchIds, puuid, loading, setLoading }) {
  const [gameResults, setGameResults] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setGameResults(null);
      setLoading(true);
      const { data: { gameResults } } = await axios.post('/api/matchresult', { matchIds });
      setGameResults(gameResults);
      setLoading(false);
      return () => {
        setGameResults(null);
      }
    }
    getData();
  }, [matchIds])

  if (!gameResults) {
    return <div className="container-lg">
      <h1>Loading...</h1>
    </div>
  } else {
    return (
      <div className="container-lg">
        <div className="row row-cols row-cols-xl-2">
          {
            gameResults.map(gameResult => <OneGameResult key={gameResult.info.gameId} gameResult={gameResult} puuid={puuid} />)
          }
        </div>
      </div>
    )
  }
}