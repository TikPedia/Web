import { Client } from 'pg';

async function createDatabaseIfNotExists() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'vaf',
        password: 'vaf',
        database: 'postgres',
    });

    try {
        await client.connect();
        await client.query('CREATE DATABASE tikpedia WITH OWNER = vaf;');
    } catch (error) {
        if (error.message !== 'database "tikpedia" already exists') {
            console.error(error.message);
        }
    } finally {
        await client.end();
    }
}

createDatabaseIfNotExists();
