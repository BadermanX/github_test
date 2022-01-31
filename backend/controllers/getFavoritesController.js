const fs = require("fs")
const path = require("path");

module.exports = async ()=>{
    //simulate a database call
    const pathToData = path.join(__dirname, "../mockData/favorites.json")
    const data = fs.readFileSync(pathToData, "utf8")

    try{
        return JSON.parse(data)
    }
    catch(e){
        //some error log here
        return({
            "error": "failed to get favorites",
            "message": e.toString()
        })
    }
}