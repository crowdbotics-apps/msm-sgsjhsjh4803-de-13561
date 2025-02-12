import axios from "axios"
import {
  DSSLACKCONNECTOR1_USERNAME,
  DSSLACKCONNECTOR1_PASSWORD
} from "react-native-dotenv"
const dSSlackConnector = axios.create({
  baseURL: "https://api.spotify.com",
  auth: {
    username: DSSLACKCONNECTOR1_USERNAME,
    password: DSSLACKCONNECTOR1_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dsslackconnector1_get_v1_albums_list(action) {
  return dSSlackConnector.get(`/v1/albums`, null, {
    params: { ids: action.ids, market: action.market }
  })
}
export const apiService = { dsslackconnector1_get_v1_albums_list }
