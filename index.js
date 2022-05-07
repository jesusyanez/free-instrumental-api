const express = require('express');
const beats = require('./api/beats');
const app = express();

const PORT = process.env.PORT || 5050;

app.use("/api/beats", beats);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));