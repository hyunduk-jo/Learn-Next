export default function Item({ item }) {

  return (
    <div className="col p-0">
      {
        item === 0 ?
          <div className="rounded bg-secondary" style={{ width: "32px", height: "32px" }}></div> :
          <img className="item rounded"
            src={`http://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/${item}.png`}
            alt={item}
            style={{ width: "32px", height: "32px" }} />
      }
    </div>
  )
}