// S C R I P T  O R I  B Y  ZYKO MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -

// • Zyko MD (me)
// • Aldi Lesmana
// • Wh Mods Dev
// • Danzz Coding
// • Adrian
// • XTRAM-TEAM

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")
/*============== NOMOR ==============*/
global.owner = ['6283133329293']
global.premium = ['6283133329293']
global.namaowner = "ZYKO MD"
global.namebot = "Zykobotz"
global.sig = 'https://instagram.com/zzyko_04'
global.sgc = 'https://chat.whatsapp.com/HQy6bLpnrYs2OnPY3r6Bq4'
/*============== PAYMENT ==============*/
global.adana = '6283133329293'
global.agopay = '6285212649276'
global.aovo = '6285212649276'
/*============== WATERMARK ==============*/
global.v = 'Credits Thanks Help Me'
global.wm = '© 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷'
global.packname = ""
global.author = "Sticker By zykomd"
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴢʏᴋᴏ ᴍᴅ ッ'
/*============== CREATE PANEL ==============*/
global.domain = '-' // ISI LINK DOMAIN
global.apikey = '-' // ISI APIKEY PTLA
global.c_apikey = '-' // ISI APIKEY PTLC
/*============== MESS ==============*/
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'zyko md Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner zyko md',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor zyko md',
    wait: 'Sabar ya zyko md sedang proses',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//Thum
global.thumb = fs.readFileSync("./img/zyko.png")
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
