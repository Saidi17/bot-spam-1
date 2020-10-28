//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

const Discord = require("discord.js");
const myid = ['770585879068147744'];//هنا بتحط الايدى بتاعك بتاع الديسكورد
const developers = ['770585879068147744'];// هنا بتحط الايدى بتاع الحسابات اللى هيتحكم فى البوتات
const prefix = ['$'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.login("NzcwNzM5NjI5MzU0OTA5NzA2.X5h_nQ.kXt9J6_pVrcTbSbp4g4aGIvBvCE");
client2.login("NzcwNzQzNDI2ODUzMjQwODcy.X5iA9w.jgqChJpmNbZQwRSzoA-nY49HJQA");
client3.login("NzcwNzQzOTkxMjE3NDIyMzU3.X5iBeA.SwMGKdOK6ZvWTS31ZHq9bKkJJcU");
client4.login("NzcwNzQ0NTc4Njc2MjI4MTI3.X5iB9Q.vU5fy_Pv6meePNhH00RsD6p8rJc");
client5.login("NzcwNzQ1MDk1MTc5MzM3Nzcw.X5iCeQ.bCg316jA51amuzmT-pNEjcZt4Ck");
client6.login("NzcwNzQ1NTY2ODA3NDU3ODIz.X5iDcw.WC_6o0RLNM4GC6IwMC490dbuVvo");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c1'){
message.channel.send('#credits')
  }
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content ===  'u1'){
message.channel.send("©angryblack YT")
  }  
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c2'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c3'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    //copyright © Angry Black 2020.//❦Angry Black❦
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c4'){
message.channel.send('#credits')
  }
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content ===  'u1'){
message.channel.send("©angryblack YT")
  }  
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c5'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    //copyright © Angry Black 2020.//❦Angry Black❦
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd6') {
message.channel.send('#daily')
  }
  if(message.content === 'c6'){
message.channel.send('#credits')
  }
  if(message.content === 'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p6') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on("ready", () => {
  console.log('Bot created by ©Angry Black')
})

client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
//copyright © Angry Black 2020.//❦Angry Black❦
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)//POULAZ

client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©AngryBlack-YT-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
}); 

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)//POULAZ

const express = require("express");
const app = express();

app.listen(() => console.log("Bot created by ©Angry Black"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)//POULAZ