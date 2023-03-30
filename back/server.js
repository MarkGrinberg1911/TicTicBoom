const express = require('express')
const cors = require('cors')
require("dotenv").config();
const PORT = 8000
const app = express()
app.use(cors())
app.use(express.json());
app.listen(PORT, () => {
    console.log('Server running on port 8000')
})
