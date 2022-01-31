
//this was in the docs for noide-fetch common js imports. Not my idea
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// generic get data function
module.exports = async ({url})=>{
    let data= []
    
    try {
        const response = await fetch(url);
        data = await response.json();
    }

    catch(e){
        //some logger here

        data = { 
            total_count: 0,
            items: [],          
            error: "failed to parse responses"
        }
    }
  
    return data
}

