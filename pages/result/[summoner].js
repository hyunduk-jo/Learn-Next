import axios from "axios"
import GameResult from "../../components/GameResults"
import UserSection from "../../components/UserSection"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import ButtonSection from "../../components/ButtonSection"
import { useRouter } from "next/dist/client/router"
import Image from 'next/image'

export default function Summoner() {
  const [loading, setLoading] = useState(true);
  const [summonerInfos, setSummonerInfos] = useState(null);
  const [matchIds, setMatchIds] = useState(null);
  const router = useRouter();

  async function getSummonerInfos() {
    const { data: { summonerInfos } } = await axios.post('/api/summoner', { summoner: router?.query.summoner });
    setSummonerInfos(summonerInfos);
  }

  async function getMatchIds() {
    const { data: { matchIds } } = await axios.post('/api/match', { puuid: summonerInfos?.puuid, start: router?.query.start });
    setMatchIds(matchIds);
  }

  useEffect(() => {
    if (router?.query?.summoner) {
      getSummonerInfos();
    }
  }, [router?.query.summoner])

  useEffect(() => {
    if (summonerInfos) {
      getMatchIds();
    }
  }, [summonerInfos?.puuid, router?.query.start])

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
            loading={loading}
            setLoading={setLoading} />
        </section>
        <section>
          <ButtonSection
            loading={loading}
            summoner={summonerInfos.name}
            start={router?.query.start} />
        </section>
      </>
    )
  }
}