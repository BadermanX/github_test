const fs = require("fs")
const path = require("path");

module.exports = async (dataToAdd)=>{

    const {id, name} = dataToAdd
    const pathToData = path.join(__dirname, "../mockData/favorites.json")

    //simulate a database call
    const data = fs.readFileSync(pathToData, "utf8")
    try{
        let newData = JSON.parse(data)

        let dataAlreadyInDatabase = newData.find(el => el.id == id)
        if(dataAlreadyInDatabase){
            throw new Error("Data already in database")
        }

        newData.push({
            id: id,
            name: name
        })

        fs.writeFileSync(pathToData, JSON.stringify(newData));
        return newData

    }
    catch(e){
        //some error log here
        return({
            "error": "failed to add favorites",
            "message": e.toString()
        })
    }
}