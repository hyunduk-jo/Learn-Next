import { useRouter } from "next/dist/client/router";
import { useMediaQuery } from "react-responsive";
import "../../styles/ParticipantCol.module.css";

export default function ParticipantCol({ team }) {
  const router = useRouter();

  const xl = useMediaQuery({
    query: "(min-width: 1200px)"
  })
  const lg = useMediaQuery({
    query: "(min-width: 992px) and (max-width: 1199px)"
  })
  const md = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 992px)"
  })

  const onClick = (summoner) => {
    router.push(`/result/${summoner}`)
  }

  return (
    <div className="col col-rows-5 m-0 d-flex flex-column justify-content-center align-items-center">
      {
        team.map(participant => {
          return <div key={participant.puuid} className="row m-0 d-flex my-1" style={{ width: "100%" }}>
            <div className="p-0">
              <div style={{ cursor: "pointer" }} onClick={() => onClick(participant.summonerName)}>
                <img
                  style={{ width: "22px", height: "22px" }}
                  src={participant.championName === "FiddleSticks" ?
                    `http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/Fiddlesticks.png` :
                    `http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${participant.championName}.png`}
                  alt={participant.championName} />
                <span
                  className="d-inline-block text-truncate rwidth align-middle"
                  style={xl ? { fontSize: "11px", maxWidth: "45px" } :
                    lg ? { fontSize: "11px", maxWidth: "80px" } :
                      md ? { fontSize: "11px", maxWidth: "70px" } :
                        { fontSize: "11px", maxWidth: "120px" }}>
                  {participant.summonerName}
                </span>
              </div>
            </div>
          </div>
        })
      }
    </div >
  )
}