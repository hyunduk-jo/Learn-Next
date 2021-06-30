import axios from "../../axios/axios";


const handler = async (req, res) => {
  try {
    //summoner name
    const { summoner } = req.body;
    const encodedSummoner = encodeURI(summoner);
    //summoner's id, accountId, puuid, name, profileIconId, level, revisionDate
    const { data: summonerInfos } = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedSummoner}`);

    res.json({ summonerInfos })
  } catch (error) {
    console.log(error.message);
    res.json({ msg: "Error occured." })
  }
}

export default handler;