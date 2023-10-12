"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
async function createDatabaseIfNotExists() {
    const client = new pg_1.Client({
        host: 'localhost',
        port: 5432,
        user: 'vaf',
        password: 'vaf',
        database: 'postgres',
    });
    try {
        await client.connect();
        const res = await client.query("SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('tikpedia_db')");
        if (res.rows.length > 0) {
            console.log('Database tikpedia_db already exists');
            return;
        }
        await client.query('CREATE DATABASE tikpedia_db WITH OWNER = vaf;');
        console.log('Database tikpedia_db created successfully');
    }
    catch (error) {
        console.error(error.message);
    }
    finally {
        await client.end();
    }
}
createDatabaseIfNotExists();
//# sourceMappingURL=createDB.js.map