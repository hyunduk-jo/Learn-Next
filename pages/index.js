import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"
import Title from "../components/Title"

export default function Home() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onValid = async data => {
    const { data: { summonerInfos } } = await axios.post('http://localhost:3000/api/summoner', { summoner: data.summoner });
    router.push(`/result/${summonerInfos.name}?start=0`);
  }

  return (
    <div className="container-lg d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Title title="DUK.GG" />
      <form onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register("summoner", { required: true })} />
        <button>Search</button>
      </form>
    </div>
  )
}
