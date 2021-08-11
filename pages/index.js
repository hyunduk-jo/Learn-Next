import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"
import Title from "../components/Title"
import styles from "../styles/index.module.css";
import Head from "next/head";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  async function onValid(data) {
    const { data: { summonerInfos } } = await axios.post('/api/summoner', { summoner: data.summoner });
    router.push(`/result/${summonerInfos?.name}?start=0`);
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/duck.ico" />
      </Head>
      <section className={styles.bg}>
        <div className="container-lg d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
          <Title title="DUK.GG" />
          <h1 style={{ fontSize: "5rem", fontWeight: "600", marginBottom: "40px" }}>DUK.GG</h1>
          <form onSubmit={handleSubmit(onValid)}>
            <input
              className={styles.search}
              type="text" {...register("summoner", { required: true })}
              placeholder="Search by Summoner Name.." />
            <button style={{ display: "none" }}>Search</button>
          </form>
        </div>
      </section>
    </div>
  )
}
