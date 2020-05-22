import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NzKoPR8vyVz_M72mZh6ENFTlLyTrrboYc8fkHAvoSI8",
  },
});
