import axios from "axios"
import GameResult from "../../components/GameResults"
import UserSection from "../../components/UserSection"
import Header from "../../components/Header"
import { useState } from "react"
import ButtonSection from "../../components/ButtonSection"

export default function Summoner({ summonerInfos, matchIds, start }) {
  //console.log(summonerInfos, matchIds)
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Header />
      <section>
        <UserSection summonerInfos={summonerInfos} />
      </section>
      <section>
        <GameResult matchIds={matchIds} puuid={summonerInfos.puuid} loading={loading} setLoading={setLoading} />
      </section>
      <section>
        <ButtonSection loading={loading} summoner={summonerInfos.name} start={start} />
      </section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { data: { summonerInfos } } = await axios.post('http://localhost:3000/api/summoner', { summoner: context.params.summoner });
  const { data: { matchIds } } = await axios.post('http://localhost:3000/api/match', { puuid: summonerInfos.puuid, start: context.query.start })
  return {
    props: {
      summonerInfos,
      matchIds,
      start: context.query.start
    }
  }
}