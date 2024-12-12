import axios from "axios";

export default axios.create({

    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a814e72aaf514c1aa328616be81f6ae7'
    }

})
