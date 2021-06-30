import axios from "../../axios/axios";

const handler = async (req, res) => {
  try {
    const { matchIds } = req.body;
    const gameResults = [];
    for (let i = 0; i < matchIds.length; i++) {
      const result = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchIds[i]}`);
      gameResults.push(result.data);
    }
    res.json({ gameResults })
  } catch (error) {
    console.log(error.message);
    res.json({ msg: "Error occured." })
  }
}

export default handler;