import dotenv from 'dotenv'
import express,{Express} from 'express'
import { connectToDb } from './db/db';
import cors from 'cors'

dotenv.config();
const app:Express =express()

connectToDb()

app.use(cors())
app.use(express.json());
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

