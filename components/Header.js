import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"
import Link from 'next/link'

export default function Header() {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const onValid = data => {
    router.push(`/result/${data.summoner}?start=0`);
    setValue('summoner', "");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-lg">
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <div className="navbar-brand fs-2 fw-bold">DUK.GG</div>
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcollapse" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pt-2" id="navcollapse">
          <form className="d-flex ms-auto" onSubmit={handleSubmit(onValid)}>
            <input {...register('summoner', { required: true })} className="form-control me-2" type="search" placeholder="Search Summoner..." />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}