const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "aAlGQRhS#clbxv1uwsJDSZr9-XKH99I0BpcaNd5UEaUHrySKFpoE",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923346690239",
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "false",
    MODE: process.env.MODE || "private",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/efeurhobo/Empire_X/main/lib/assets/empire.jpg",
    PREFIX: process.env.PREFIX || ".",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    OWNER_NAME: process.env.OWNER_NAME || "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐞𝐦𝐩𝐢𝐫𝐞",
    BOT_NAME: process.env.BOT_NAME || "Empire_X",
    CAPTION: process.env.CAPTION || "Made By 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐞𝐦𝐩𝐢𝐫𝐞",
};
