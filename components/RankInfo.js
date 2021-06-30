export default function RankInfo({ rank, name, win, lost, points, type }) {
  return (
    <div className="row row-cols-2 d-flex" style={{ width: "100%", height: "100%" }}>
      <div className="col d-flex align-items-center p-0">
        <div className="d-flex flex-column align-items-center">
          <img
            style={{ width: "100px" }}
            className="img-fluid"
            src={`/ranked-emblems/Emblem_${name}.png`}
            alt={name}
          />
          <span className="text-center mt-1">{rank}</span>
        </div>
      </div>
      <div className="col d-flex align-items-center p-0">
        <div className="text-light">
          <h6>{type.toUpperCase()} Rank</h6>
          <p style={{ fontSize: "14px" }}>{(win / (win + lost) * 100).toFixed(1)}% {points}LP</p>
          <p style={{ fontSize: "14px" }}>
            <span className="text-success">{win}W</span> <span className="text-warning">{lost}L</span>
          </p>
        </div>
      </div>
    </div>
  )
}