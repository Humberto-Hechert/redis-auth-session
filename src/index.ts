import app from './app';
import client from './config/redis';
import "reflect-metadata";
import { AppDataSource } from './config/mysql';

const PORT = process.env.PORT

const bootsrap = async () => {
    try {
        await client.connect();

        await AppDataSource.initialize();
        console.log("MySQl connected!")

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error('Error in redis connection: ', err)
    }
}

bootsrap();

