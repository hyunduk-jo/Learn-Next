import MultipleKill from "./MultipleKill";
import moment from 'moment';

export default function OneGameKDA({ gameResult, myParticipantIdx }) {
  const myInfo = gameResult?.info?.participants[myParticipantIdx];
  const gameCreation = gameResult?.info?.gameCreation;
  const gameCreatedDate = new Date(gameCreation);
  const passedDate = moment(gameCreatedDate).fromNow();
  const date = passedDate.replace('ago', '전').replace('an', '1').replace('minutes', '분').replace('hours', '시간').replace('hour', '시간').replace('days', '일').replace('months', '달').replace('years', '년').replace(' ', '');
  return (
    <div className="col d-flex flex-column justify-content-center align-items-center m-0 p-0">
      <h6>{date}</h6>
      <div>
        <span className="fs-5">{myInfo?.kills}/</span>
        <span className="fs-5 text-danger">{myInfo?.deaths}</span>
        <span className="fs-5">/{myInfo?.assists}</span>
      </div>
      {myInfo?.deaths === 0 ? <span>Perfect</span> : <span className="ms-1">{((myInfo?.kills + myInfo?.assists) / myInfo?.deaths).toFixed(2)} 평점</span>}
      <MultipleKill kills={myInfo?.largestMultiKill} />
    </div>
  )
}