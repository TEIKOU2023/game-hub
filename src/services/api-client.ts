import axios from "axios";

export default axios.create({

    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f3695c6694324fabbb67b868fd7766b2'
    }

})
