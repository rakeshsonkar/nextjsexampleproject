
import sql from 'mssql';
const config = {
    user: 'sa',
    password: '123',
    server: '10.130.34.151',  // Replace with the actual IP address of the SQL Server
    database: 'Electricitybill',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}


// const config = {
//     connectionString: "Data Source=10.130.34.151;Initial Catalog=paymanager;User ID=sa;Password=123;Min Pool Size=10;Max Pool Size=60;Connect Timeout=180",
//     options: {
//         encrypt: true,  // Enable SSL encryption
//         cryptoCredentialsDetails: {
//             minVersion: 'TLSv1.2',  // Specify the minimum SSL protocol version
//         },
//     },
// }

// export default async function ExcuteQuery(query, options) {
//     try {
//         let pool = await sql.connect(config);
//         let products = await pool.request().query(query);
//         return products.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

export const runQuery = async (queryString) => {
    try {
        await connectToDatabase();
        const result = await sql.query(queryString);
        console.log(result);
        return result.recordset;
    } catch (error) {
        console.error('Error running query:', error);
        throw error;
    }
};

export const runQueryPost = async (queryString) => {
    try {
        await connectToDatabase();
        const result = await sql.query(queryString);
        return result;
    } catch (error) {
        console.error('Error running query:', error);
        throw error;
    }
}; 
export const connectToDatabase = async ()=> {
    try {
        await sql.connect(config);
        console.log('Connected to the database');
        // Now you can perform database operations using the 'sql' object.
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

