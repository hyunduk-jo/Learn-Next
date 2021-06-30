import { useRouter } from "next/dist/client/router"

export default function ButtonSection({ loading, summoner, start }) {
  console.log("Start: ", start);
  console.log(summoner)
  const router = useRouter();
  return (
    <div className="container-lg p-0 d-flex">
      <button className="btn btn-secondary border"
        style={{ width: "100%" }}
        onClick={() => router.push(`/result/${summoner}?start=${parseInt(start) - 10}`)}
        disabled={loading || parseInt(start) === 0}>
        {
          loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> : "이전"
        }
      </button>
      <button
        className="btn btn-secondary border"
        style={{ width: "100%" }}
        onClick={() => router.push(`/result/${summoner}?start=${parseInt(start) + 10}`)}
        disabled={loading || parseInt(start) === 100}>
        {
          loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> : "다음"
        }
      </button>
    </div>
  )
}