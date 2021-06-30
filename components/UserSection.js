import axios from "axios"
import { useEffect, useState } from "react"
import Tier from "./Tier";

export default function UserSection({ summonerInfos }) {

  const [soloRank, setSoloRank] = useState(null);
  const [teamRank, setTeamRank] = useState(null);
  useEffect(() => {
    const getLeague = async () => {
      const { data: { soloRankData, teamRankData } } = await axios.post('/api/league', { summonerId: summonerInfos.id });
      setSoloRank(...soloRankData);
      setTeamRank(...teamRankData);
    }
    getLeague();
  }, [summonerInfos.id])

  return (
    <div className="container-lg bg-dark text-light border">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="my-4">
            <img className="img-fluid rounded-circle mb-2" style={{ width: "150px" }} src={`http://ddragon.leagueoflegends.com/cdn/11.13.1/img/profileicon/${summonerInfos.profileIconId}.png`} alt={summonerInfos.profileIconId} />
            <h3><b>{summonerInfos.name}</b></h3>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Tier tier={soloRank?.tier} rank={soloRank?.rank} win={soloRank?.wins} lost={soloRank?.losses} points={soloRank?.leaguePoints} type={"solo"} />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Tier tier={teamRank?.tier} rank={teamRank?.rank} win={teamRank?.wins} lost={teamRank?.losses} points={teamRank?.leaguePoints} type={"team"} />
        </div>
      </div>
    </div>
  )
}