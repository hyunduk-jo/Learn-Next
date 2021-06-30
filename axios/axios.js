import axios from "axios";

export default axios.create({
  headers: {
    "X-Riot-Token": process.env.RIOT_KEY
  }
})