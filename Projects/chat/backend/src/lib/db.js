import "dotenv/config"
import pg from "pg"
const {Pool}= pg;
import {PrismaPg} from "@prisma/adapter-pg"
import {PrimsaClient} from "@prisma/client"

const connectString=process.env.DATABASE_URL;
const pool=new Pool({connectionString});
const adapter=new PrismaPg(pool);

export const primsa=new PrimsaClient({adapter});