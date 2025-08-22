import express, { json } from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(json());


// Configuración de PostgreSQL con datos reales
const db = new Pool({
  host: 'xxxxr.supabase2.com',
  user: 'xxxxx',
  password: process.env.POSTGRES_PASSWORD,
  database: 'xxxxx',
  port: 6543,
  ssl: { rejectUnauthorized: false } 
});
