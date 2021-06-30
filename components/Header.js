import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"

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
        <div className="navbar-brand">DUK.GG</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" onSubmit={handleSubmit(onValid)}>
            <input {...register('summoner', { required: true })} className="form-control me-2" type="search" placeholder="Search Summoner..." />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}