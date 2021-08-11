import RankInfo from "./RankInfo"
import Image from "next/image"

export default function Tier({ tier, rank, win, lost, points, type }) {
  switch (tier) {
    case "CHALLENGER":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Challenger"} />
    case "GRANDMASTER":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Grandmaster"} />
    case "MASTER":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Master"} />
    case "DIAMOND":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Diamond"} />
    case "PLATINUM":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Platinum"} />
    case "GOLD":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Gold"} />
    case "SILVER":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Silver"} />
    case "BRONZE":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Bronze"} />
    case "IRON":
      return <RankInfo rank={rank} type={type} win={win} lost={lost} points={points} name={"Iron"} />
    default:
      return <Image
        width={100}
        height={100}
        className="img-fluid"
        src={'/ranked-emblems/Emblem_Unrank.png'}
        alt="unrank"
      />
  }
}