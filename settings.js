//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'd6295ca53e', // if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['905538834272','905538834272']
global.premium = ['905538834272']
global.ownernomer = '905538834272'
global.ownername = 'Laçin Eke'
global.botname = 'Laçin Eke'
global.footer = '©NexusNwInc.'
global.ig = 'https://github.com/EkeLachin'
global.region = 'Türkiye, Turkey'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://youtube.com/c/LacinEke'
global.packname = 'Laçin Eke-YouTube'
global.author = '🐦Laçin Eke YouTube'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Başarılı ✓',
    admin: 'Bu Özellik Sadece Yöneticiler İçindir!',
    botAdmin: 'Bot Önce Yönetici Olmalıdır!',
    owner: 'Bu özelliği yalnızca bot sahibi kullanabilir!',
    group: 'Bu özellik yalnızca gruplarda çalışır!',
    private: 'Bu özelik (DM) özel sohbetlerde çalışır!',
    bot: 'Bu Özellik Sadece Bot İçindir!',
    wait: 'Lütfe bekleyiniz...',
    error: 'Hata! Belki (Api Key) ApiAnahtarının Süresi Dolmuş🤔!',
    endLimit: 'Günlük Limitinizin Süresi Doldu, Limit Her 12 Saatte Bir Sıfırlanacak!',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
