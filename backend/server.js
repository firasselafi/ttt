const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_DB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established sucessfully!');
});    

const patientsRouter = require('./routes/patients');
const consultationsRouter = require('./routes/consultations')
const DocotorRouter = require("./routes/doctor");
const AuthRouter = require("./routes/auth");


app.use('/patients', patientsRouter);
app.use('/doctors', auth, consultationsRouter);
app.use("/doc", auth, DocotorRouter);
app.use("/auth", AuthRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});