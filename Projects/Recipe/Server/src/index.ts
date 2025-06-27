import dotenv from 'dotenv'
import express,{Express} from 'express'
import { connectToDb } from './db/db';
import cors from 'cors'
import { Userrouter } from './routes/User.route';

dotenv.config();
const app:Express =express()

connectToDb()

app.use(cors())
app.use(express.json());

app.use('/api/v1/user',Userrouter);
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

