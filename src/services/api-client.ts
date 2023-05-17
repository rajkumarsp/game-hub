import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: "9130580c71314c59bee57bdc4c596d38"
    }
})
  