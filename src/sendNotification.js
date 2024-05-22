import axios from 'axios';

const TELEGRAM_TOKEN = '6426055976:AAFUXoeAT20MRo3VZxsiN8i4Y2djb-XedW0';
const CHAT_ID = '423085986';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

const sendNotification = async (message) => {
    try {
        const response = await axios.post(TELEGRAM_API_URL, {
            chat_id: CHAT_ID,
            text: message
        });
        return response.data;
    } catch (error) {
        console.error("Error sending message to Telegram", error);
        throw error;
    }
};

export default sendNotification;
