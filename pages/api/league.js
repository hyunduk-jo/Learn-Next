import axios from "../../axios/axios";

const handler = async (req, res) => {
  try {
    const { summonerId } = req.body;
    const { data: leagueArray } = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`);
    const soloRankData = leagueArray.filter(league => league.queueType === 'RANKED_SOLO_5x5');
    const teamRankData = leagueArray.filter(league => league.queueType !== 'RANKED_SOLO_5x5');
    res.json({ soloRankData, teamRankData })
  } catch (error) {
    res.json({ msg: "Error occured." })
  }
}

export default handler;