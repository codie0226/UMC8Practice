import mysql from "mysql2/promise"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
    log: [
        {
        emit: 'event',
        level: 'query',
        },
        {
        emit: 'stdout',
        level: 'error',
        },
        {
        emit: 'stdout',
        level: 'info',
        },
        {
        emit: 'stdout',
        level: 'warn',
        },
    ],
})

prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
})
 
dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});