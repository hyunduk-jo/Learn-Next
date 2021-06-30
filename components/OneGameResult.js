import OneGameProfile from "./OneGameResult/OGRProfile";
import OneGameKDA from "./OneGameResult/OGRKDA";
import OneGameItems from "./OneGameResult/OGRItems";
import OneGameParticipants from "./OneGameResult/OGRParticipants";

export default function OneGameResult({ gameResult, puuid }) {
  const myParticipantIdx = gameResult.info.participants.findIndex(participant => participant.puuid === puuid);
  return (
    <div className="row row-cols-2 row-cols-md-4 text-light bg-dark border m-0 p-0">
      <OneGameProfile gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameKDA gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameItems gameResult={gameResult} myParticipantIdx={myParticipantIdx} />
      <OneGameParticipants gameResult={gameResult} />
    </div>
  )
}