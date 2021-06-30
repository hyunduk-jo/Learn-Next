export default function MultipleKill({ kills }) {
  switch (kills) {
    case 2:
      return <div className="bg-primary rounded-pill px-1"><span>더블킬</span></div>
    case 3:
      return <div className="bg-success rounded-pill px-1"><span>트리플킬</span></div>
    case 4:
      return <div className="bg-danger rounded-pill px-1"><span>쿼드라킬</span></div>
    case 5:
      return <div className="bg-warning rounded-pill px-1"><span>펜타킬</span></div>
    default:
      return null;
  }
}