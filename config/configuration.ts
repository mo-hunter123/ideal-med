export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    database: {
        user: process.env.DATA_BASE_USERNAME,
        pass: process.env.DATA_BASE_PASSWORD,
        name: process.env.DATA_BASE_NAME,
        port: process.env.DATA_BASE_PORT,
        host: process.env.DATA_BASE_HOST
    }
});