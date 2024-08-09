import 'dotenv/config'

const config = {
    port: process.env.PORT || 3000,
    geminKey: process.env.GEMINI_API_KEY,
};

export default config;