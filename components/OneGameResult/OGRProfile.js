export default function OneGameProfile({ gameResult, myParticipantIdx }) {
  const myInfo = gameResult?.info?.participants[myParticipantIdx];
  const runeObj = {
    8000: "7201_Precision.png",
    8100: "7200_Domination.png",
    8200: "7202_Sorcery.png",
    8300: "7203_Whimsy.png",
    8400: "7204_Resolve.png",
  }
  const spellObj = {
    1: "SummonerBoost",
    3: "SummonerExhaust",
    4: "SummonerFlash",
    6: "SummonerHaste",
    7: "SummonerHeal",
    11: "SummonerSmite",
    12: "SummonerTeleport",
    13: "SummonerMana",
    14: "SummonerDot",
    21: "SummonerBarrier",
    30: "SummonerPoroRecall",
    31: "SummonerPoroThrow",
    32: "SummonerSnowball",
    39: "SummonerSnowURFSnowball_Mark"
  }

  const rune1 = myInfo?.perks?.styles[0]?.style;
  const rune2 = myInfo?.perks?.styles[1]?.style;
  const spell1 = myInfo?.summoner1Id;
  const spell2 = myInfo?.summoner2Id;
  return (
    <div className="col d-flex flex-column align-items-center justify-content-center m-0 p-0" style={{ height: "180px" }}>
      <h6 className={myInfo?.win ? "text-primary" : "text-danger"}>{myInfo?.win ? "승리" : "패배"}</h6>
      <div className="d-flex justify-content-evenly" style={{ width: "100%" }}>
        <img
          className="rounded-circle mt-1"
          src={`http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${myInfo?.championName}.png`}
          alt={myInfo?.championName}
          style={{ width: "45px", height: "45px" }} />
        <div className="row row-cols-2" style={{ width: "60px" }}>
          <div className="col">
            <img
              className="rounded"
              src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeObj[rune1]}`}
              alt={runeObj[rune1]}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col">
            <img
              className="rounded"
              src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeObj[rune2]}`}
              alt={runeObj[rune2]}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col">
            <img
              className="rounded"
              src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${spellObj[spell1]}.png`}
              alt={spell1}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="col">
            <img
              className="rounded"
              src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${spellObj[spell2]}.png`}
              alt={spell2}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
      </div>
      <h6 className="mt-2">{myInfo?.championName}</h6>
    </div>
  )
}