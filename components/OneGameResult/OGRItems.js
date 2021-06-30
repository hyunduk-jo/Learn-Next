import Item from "./Item";

export default function OneGameItems({ gameResult, myParticipantIdx }) {
  const myInfo = gameResult?.info?.participants[myParticipantIdx];
  return (
    <div className="col m-0 p-0">
      <div style={{ height: "100%", width: "100%" }} className="container-fluid d-flex flex-column align-items-center justify-content-center p-0">
        <div className="row row-cols-5 gap-2 m-0 mt-1">
          <Item item={myInfo?.item0} />
          <Item item={myInfo?.item1} />
          <Item item={myInfo?.item2} />
          <Item item={myInfo?.item6} />
        </div>
        <div className="row row-cols-5 gap-2 m-0 my-1">
          <Item item={myInfo?.item3} />
          <Item item={myInfo?.item4} />
          <Item item={myInfo?.item5} />
          <Item item={0} />
        </div>
        <span className="mt-1" style={{ color: "gold" }}>{myInfo?.goldEarned} <b>Gold</b></span>
      </div>
    </div>
  )
}