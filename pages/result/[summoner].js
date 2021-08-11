import axios from "axios"
import GameResult from "../../components/GameResults"
import UserSection from "../../components/UserSection"
import Header from "../../components/Header"
import { useState } from "react"
import ButtonSection from "../../components/ButtonSection"
import Image from 'next/image'

export default function Summoner({ matchIds, summonerInfos, start }) {
  const [loading, setLoading] = useState(true);

  if (!summonerInfos || !matchIds) {
    return <div
      className="container-lg d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh" }}>
      <Image
        src="https://developer.riotgames.com/static/img/katarina.55a01cf0560a.gif"
        width={80}
        height={80}
        alt="katarina" />
    </div>
  } else {
    return (
      <>
        <Header />
        <section>
          <UserSection summonerInfos={summonerInfos} />
        </section>
        <section>
          <GameResult
            matchIds={matchIds}
            puuid={summonerInfos.puuid}
            setLoading={setLoading} />
        </section>
        <section>
          <ButtonSection
            loading={loading}
            summoner={summonerInfos.name}
            start={start} />
        </section>
      </>
    )
  }
}

export const getServerSideProps = async (ctx) => {
  const { summoner } = ctx.params;
  const { start } = ctx.query;
  const { data: { summonerInfos } } = await axios.post('http://localhost:3000/api/summoner', { summoner })
  const matchIds = [];
  if (summonerInfos) {
    const { data: { matchIds: ids } } = await axios.post('http://localhost:3000/api/match', { puuid: summonerInfos.puuid, start });
    matchIds.push(...ids);
  }
  return {
    props: {
      summonerInfos,
      matchIds,
      start
    }
  }
}