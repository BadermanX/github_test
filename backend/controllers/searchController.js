const getData = require("../system/getData")

module.exports = async ({search = [], per_page, page, sort, order})=>{

    if(!search) return []

    const url = `https://api.github.com/search/repositories`  
   
    //would have suppported more searches if I had more time to look into the api
    //just taking the first one. the UI should prevent multiple
    let queryString = encodeURIComponent(`${search[0].value} in:${search[0].key}`)

    let requestURL = `${url}?q=${queryString}&per_page=${per_page}&page=${page}&sort=${sort}&order=${order}`
    

    let dataToReturn = await getData({url: requestURL})     
  
    return dataToReturn
}