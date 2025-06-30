import dotenv from 'dotenv'
import express,{Express} from 'express'
import { connectToDb } from './db/db';
import cors from 'cors'
import { Userrouter } from './routes/User.route';
import { recipeRouter } from './routes/Recipe.route';

dotenv.config();
const app:Express =express()

connectToDb()

app.use(cors())
app.use(express.json());

app.use('/api/v1/user',Userrouter);
app.use('/api/v1/recipe',recipeRouter);
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

