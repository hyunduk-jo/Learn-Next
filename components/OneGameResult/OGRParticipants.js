import ParticipantCol from "./ParticipantCol";

export default function OneGameParticipants({ gameResult }) {
  //console.log(gameResult)
  const team1Arr = gameResult?.info?.participants?.filter(participant => participant.teamId === 100);
  const team2Arr = gameResult?.info?.participants?.filter(participant => participant.teamId === 200);
  return (
    <div className="col m-0 p-0 d-flex justify-content-center align-items-center">
      <div style={{ height: "100%" }} className="container p-0 d-flex">
        <ParticipantCol team={team1Arr} />
        <ParticipantCol team={team2Arr} />
      </div>
    </div>
  )
}