import axios from "axios";

const client = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: process.env.NEXT_PUBLIC_RAWG_API_KEY
    }
  });

  export default client;