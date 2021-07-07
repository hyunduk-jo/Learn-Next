export default function OGRSkeleton() {
  return (
    <div className="row row-cols-2 row-cols-md-4 text-light bg-dark border m-0 p-0">
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
        <div className="rounded rounded-circle bg-secondary" style={{ width: "80px", height: "80px" }}></div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "200px" }}>
        <div className="bg-secondary my-1" style={{ width: "100px", height: "25px" }}></div>
        <div className="bg-secondary my-1" style={{ width: "100px", height: "25px" }}></div>
        <div className="bg-secondary my-1" style={{ width: "100px", height: "25px" }}></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
        <div className="bg-secondary my-1" style={{ width: "100px", height: "55px" }}></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
        <div className="bg-secondary my-1" style={{ width: "150px", height: "90%" }}></div>
      </div>
    </div>
  )
}