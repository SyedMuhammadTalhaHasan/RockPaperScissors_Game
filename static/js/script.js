function rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;

    botchoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:' , botchoice);

    results = decidewinner(humanchoice,botchoice);
    console.log(results);

    message = finalmessage(results);
    console.log(message);

    rpsfrontEnd(yourchoice.id , botchoice , message);
}

function randToRpsInt() {
    return Math.floor(Math.random() *3);
}

function numberToChoice(number) {
    return ['rock' , 'paper' , 'scissor'][number];
}
function decidewinner(yourchoice,computerchoice) {
    var rpsdatabase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0 },
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0 },
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0 }
    };

    var yourscore = rpsdatabase [yourchoice] [computerchoice];
    var computerscore = rpsdatabase [computerchoice] [yourchoice];

    return[yourscore , computerscore];
}

function finalmessage([yourscore , computerscore]) {
    if (yourscore === 0){
        return{'message':'You Lost!' , 'color':'red'};
    }
else if (yourscore === 0.5){
    return{'message':'You Tied!' , 'color':'yellow'};
}
else {
    return{'message':'You Won!' , 'color':'green'};
}
}


function rpsfrontEnd(humanimagechoice , botimagechoice , finalmessage) {
    var imagesdatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

 humanDiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37, 50 , 233 , 1);' >"
 messageDiv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
 botDiv.innerHTML = "<img src='" + imagesdatabase[botimagechoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243, 38 , 24 , 1);' >"
 
 
 document.getElementById('flex-box-rps-div').appendChild(humanDiv);
 document.getElementById('flex-box-rps-div').appendChild(messageDiv);
 document.getElementById('flex-box-rps-div').appendChild(botDiv);
 
}