import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"
import Title from "../components/Title"

export default function Home() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  async function onValid(data) {
    const { data: { summonerInfos } } = await axios.post('http://localhost:3000/api/summoner', { summoner: data.summoner });
    router.push(`/result/${summonerInfos.name}?start=0`);
  }

  return (
    <section style={{ backgroundImage: "url('/bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="container-lg d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Title title="DUK.GG" />
        <h1 style={{ fontSize: "5rem", fontWeight: "600", marginBottom: "40px" }}>DUK.GG</h1>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            className="rounded-pill fw-bold"
            type="text" {...register("summoner", { required: true })}
            placeholder="Search by Summoner Name.."
            style={{
              minWidth: "280px",
              width: "60vw",
              maxWidth: "500px",
              height: "40px",
              outline: "none",
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              paddingLeft: "20px"
            }} />
          <button style={{ display: "none" }}>Search</button>
        </form>
      </div>
    </section>
  )
}
