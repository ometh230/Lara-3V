const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94703508273' : process.env.OWNER_NUMBER, //ADD YOUR NUMBER
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝕃𝔸ℝ𝔸-𝕄𝔻=jZAlAAoI#mXT4SMQrJ4yqEVHsAjYVKs5zLBYGlJWQyK8OBOzV3kM' : process.env.SESSION_ID, //ADD YOUR SSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'tharumin' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '7PNou9kU4q3naOnt7FnBLtgilWHCbA346nd3' : process.env.GITHUB_AUTH_TOKEN, //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
    WELCOME: process.env.WELCOME === undefined ? 'true' : process.env.WELCOME,
    GOODBYE: process.env.GOODBYE === undefined ? 'true' : process.env.GOODBYE
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
