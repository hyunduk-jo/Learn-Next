import axios from "../../axios/axios";

const handler = async (req, res) => {
  try {
    const { puuid, start } = req.body;
    const { data: matchIds } = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=10`);

    res.json({ matchIds })
  } catch (error) {
    console.log(error);
    res.json({ msg: "Error occured." })
  }
}

export default handler;