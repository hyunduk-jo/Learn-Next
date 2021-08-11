import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form"
import Link from 'next/link'
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

export default function Header() {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const onValid = data => {
    router.push(`/result/${data.summoner}?start=0`);
    setValue('summoner', "");
  }
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-lg">
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <Navbar.Brand className="fs-2 fw-bold">DUK.GG</Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navcollapse" />
        <Navbar.Collapse className="pt-2" id="navcollapse">
          <Nav className="ms-auto">
            <Form className="d-flex ms-auto" onSubmit={handleSubmit(onValid)}>
              <FormControl {...register('summoner', { required: true })} className="form-control me-2" type="search" placeholder="Search Summoner..." />
              <Button variant="outline-success" className="btn btn-outline-success" type="submit">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}