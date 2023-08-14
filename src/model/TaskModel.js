import { runQuery ,runQueryPost} from "../../helper/db";

export const  TaskModel = async ()=>{
    const queryString = 'select *  from  ApiInfo'; // Replace YourTableName with the actual table name
    try {
        const results = await runQuery(queryString);
        return results;
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const  TaskModelPost =  async (data)=>{
    
    const queryString = `INSERT INTO ApiInfo (url, Method, Request) VALUES (@url, @Method, @Request)`; 
    try {
        const formattedQuery = queryString.replace('@url', `'${data.url}'`)
        .replace('@Method', `'${data.Method}'`)
        .replace('@Request', `'${data.Request}'`);
   //console.log(formattedQuery);
    return await runQueryPost(formattedQuery);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}