// npm install https://github.com/woor/discord.io/tarball/gateway_v6

var Discord = require('discord.io');
var auth = require('./auth.json');
var wordList = require('./wordList.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    var words = wordList.words;
    var containedWords = words.map(word => findWord(message, word))
    var containedWords = containedWords.filter(word => word)

    if(user !== "FoodBot") {
        for(word of containedWords) {
            var messageToSend = user + " said " + word + "!"
            bot.sendMessage({
                to: "290253312895352842",
                message: messageToSend
            });     
        }
    }
});

function findWord(message, word){
    if (message.toLowerCase().indexOf(word) !== -1) {
        return word;
    }
    else {
        return false
    }
}
