const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

log(chalk.red(" ▒█▀▀▀█ ▒█░▒█ ▒█▄░▒█ ▀█▀ ▒█▀▀▀█ ▀▀█▀▀ ▒█░▒█ "));
log(chalk.red(" ░▀▀▀▄▄ ▒█░▒█ ▒█▒█▒█ ▒█░ ░▀▀▀▄▄ ░▒█░░ ▒█▀▀█ "));
log(chalk.red(" ▒█▄▄▄█ ░▀▄▄▀ ▒█░░▀█ ▄█▄ ▒█▄▄▄█ ░▒█░░ ▒█░▒█"));
log();
log(chalk.bold("Welcome to Sunisth, the best npm package about Sunisth Kumar."));

const begin = {
    type: 'confirm',
    query: 'Do you wanna answer questions about Sunisth to satisfy his ego?',
    handle: 'type',
    accept: 'y',
    deny: 'n'
};

const again = {
    type: 'confirm',
    query: 'Want to try again?',
    handle: 'type',
    accept: 'y',
    deny: 'n'
};

const qs = [
    {
        type: 'quiz',
        query: 'What is Sunisth\'s favourite movie?',
        handle: 'a',
        answer: 'Parasite (2019)',
        symbol: '>',
        amount: 5,
        choices : [
            'The Avengers (2012)',
            'The Social Network (2010)',
            'Kimi no Nawa - Your Name (2016)',
            'Parasite (2019)',
            'Spirited Away (2001)'
        ]

    },
    {
        type: 'quiz',
        query: 'What is Sunisth\'s favourite colour?',
        handle :'a',
        answer: 'Blue',
        symbol: '>',
        amount: 5,
        choices: [
            'Red',
            'Blue',
            'Green',
            'Black',
            'Purple'
        ]
    },
    {
        type: 'quiz',
        query: 'In what city was Sunisth born?',
        handle: 'a',
        answer: 'Gurugram',
        symbol: '>',
        amount: 4,
        choices: [
            'Gurugram',
            'Pune',
            'Ahmedabad',
            'New Delhi'
        ]
    },
    {
        type: 'quiz',
        query: 'What genre of music does Sunisth listen to when he\'s programming?',
        handle: 'a',
        answer: 'Pop',
        symbol: '>',
        amount: 5,
        choices: [
            'EDM',
            'Classical',
            'Pop',
            'Metal',
            'Jazz'
        ]
    },
    {
        type: 'quiz',
        query: 'What is Sunisth\'s favourite song?',
        handle: 'a',
        answer: 'Spring Day (BTS)',
        symbol: '>',
        amount: 5,
        choices: [
            'Spring Day (BTS)',
            'Easy (Troye Sivan)',
            'Don\'t Call Me (Shinee)',
            'Open Mind (Wonho)',
            'We Don\'t Talk Anymore (Charlie Puth)'
        ]
    },
    {
        type: 'quiz',
        query: 'What is Sunisth\'s zodiac sign?',
        handle: 'a',
        answer: 'Virgo',
        symbol: '>',
        amount: 5,
        choices: [
            'Leo',
            'Virgo',
            'Cancer',
            'Aries',
            'Sagittarius'
        ]
    },
    {
        type: 'quiz',
        query: 'What is Sunisth\'s favourite Indian state?',
        handle: 'a',
        answer: 'Maharashtra',
        symbol: '>',
        amount: 5,
        choices: [
            'Haryana',
            'Gujarat',
            'Maharashtra',
            'Delhi',
            'Karnataka'
        ]
    },
    {
        type: 'input',
        query: '(True or False)\nSunsith once got a cast for two months from football. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nSunsith uses a different password for every account. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nSunsith always has matcha in his dorm. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nEven though he has never been there, Sunisth says that his favourite place is New York. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nSunsith once blacked out at a party in Pune. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nWhile Sunsith loves politics, he has never actually voted. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nSunisth can name the capital of every state in India. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nSunsith has watched Friends back to back three times. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: 'What day of the month is Sunisth\'s birthday?',
        handle: 'a',
        answer: '16'
    }
];

(async function(){
    let conf = qoa.prompt([begin]);
    let result = await conf;

    if (result.type) {
        round()
    }
})();

async function round(){
    qoa.clearScreen();
    log('\n')
    let used = [];
    let score = 0;

    for (let i = 1; i <= 7; i++) {
        let rand = Math.floor(Math.random() * qs.length);

        if(!(rand in used)) {
            log(chalk.whiteBright.bgRed('  Question', i, '/7:  '));
            let question = qoa.prompt([qs[rand]]);
            let answer = await question;

            if (qs[rand].type === 'input') {
                if (qs[rand].answer === answer.a) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                log(chalk.red('Wrong'));
                let longate = {t: 'true', f: 'false'};
                if (longate[qs[rand].answer]) {
                    log(chalk.gray('The correct answer is', longate[qs[rand].answer]));
                } else {
                    log(chalk.gray('The correct answer is', qs[rand].answer));
                }
            }
            } else if (qs[rand].type === 'quiz') {
                if (answer.a.isCorrect) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    log(chalk.gray(`The correct answer is ${qs[rand].answer}`));
                }
            }
            log('\n');

            used.push(rand);
        } else {
            i--;
        }
    }
    log(chalk.whiteBright.bgRed.bold('  You got', score, 'correct  '));
    let another = qoa.prompt([again]);
    let res = await another;

    if (res.type) {
        round();
    }
}
