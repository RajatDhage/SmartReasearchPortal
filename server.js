


const express = require('express');
const oracledb = require('oracledb');
const app = express();
const PORT = 3001;

// Oracle DB connection details
const dbConfig = {
  user: 'YOUR_DB_USER',
  password: 'YOUR_DB_PASSWORD',
  connectString: 'YOUR_DB_HOSTNAME/YOUR_DB_SERVICE_NAME', // e.g., 'hostname:port/DBService'
};

// Middleware to parse JSON request body
app.use(express.json());

// API route to fetch data based on searchTerm and dataType
app.post('/api/search', async (req, res) => {
  const { searchTerm, dataType } = req.body; // Receive both search term and data type

  // SQL query and parameters
  let query = '';
  const params = [`%${searchTerm}%`]; // Wildcard search

  // Determine which data to fetch based on the selected tab
  switch (dataType) {
    case 'COMBINED_DATA':
      query = `SELECT * FROM COMBINED_DATA WHERE CUSTOMER_NAME LIKE :searchTerm`;
      break;
    case 'SNP_GLOBAL_DATA':
      query = `SELECT * FROM SNP_GLOBAL_DATA WHERE CUSTOMER_NAME LIKE :searchTerm`;
      break;
    case 'DNB_DATA':
      query = `SELECT * FROM DNB_DATA WHERE CUSTOMER_NAME LIKE :searchTerm`;
      break;
    default:
      return res.status(400).json({ error: 'Invalid dataType provided' });
  }

  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, { searchTerm: params[0] });
    res.json(result.rows); // Send fetched rows to the frontend
    await connection.close();
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).send('Error querying database');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
