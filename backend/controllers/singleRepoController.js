const getData = require("../system/getData")

module.exports = async ({id})=>{
    const githubReqUrl = `https://api.github.com/repositories/${id}`
    let dataToReturn = await getData({url: githubReqUrl}) 
    return dataToReturn
}