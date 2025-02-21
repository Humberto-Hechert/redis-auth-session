import app from './app';
import client from './config/redis';

const PORT = process.env.PORT

const bootsrap = async () => {
    try {
        await client.connect();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error('Error in redis connection: ', err)
    }
}

bootsrap();

