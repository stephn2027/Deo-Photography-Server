
const axios = require("axios");
const dotenv = require('dotenv');

module.exports = async (req, res) => {
    const BASE_URL_PORTRAITS = `https://api.cloudinary.com/v1_1/dx0mu7i2f/resources/search?expression=folder:portraits&max_results=10&next_cursor`;
    const { parsed: config } = dotenv.config();

    const auth = {
        username: config.API_KEY,
        password: config.API_SECRET,
    };

    try {
        const response = await axios.get(BASE_URL_PORTRAITS, {
            auth,
            params: {
                next_cursor: req.query.next_cursor
            },
        });
        return res.send(response.data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


