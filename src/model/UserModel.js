import { runQuery } from '../../helper/db';


export async function fetchElectricityData() {
    const queryString = 'SELECT * FROM ELECTRICITYBILLPAYMENT'; // Replace YourTableName with the actual table name
    try {
        const results = await runQuery(queryString);
        return results;
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}