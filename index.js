const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

log(chalk.red("SUNISTH"));
log(chalk.bold("Welcome to Sunisth, the best npm package about Sunisth Kumar."));

const begin = {
    type: 'confirm',
    query: 'Do you wanna answer questions about Sunisth to satisfy his ego?',
    handle: 'update',
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
        query: 'What is Sunisth\'s favourite color?',
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
        query: 'What genre of music does Sunisth listen to when he\'s programing?',
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
        query: '(True or False) Sunsith once got a cast for two months from football. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False) Sunsith uses a different password for every account. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False) Sunsith always has matcha in his dorm. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False) Even though he has never been there, Sunisth says that his favourite place is New York. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False) Sunsith once blacked out at a party in Pune. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False) While Sunsith loves politics, he has never actually voted. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False) Sunisth can name the capital of every state in India. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False) Sunsith has watched Friends back to back three times. [t/f]',
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

    if (result.update) {
        log('\n')
        let used = [];

        for (let i = 1; i <= 7; i++) {
            let rand = Math.floor(Math.random() * qs.length);

            if(!(rand in used)) {
                log(chalk.whiteBright.bgRed('  Question', i, '/7:  '));
                let question = qoa.prompt([qs[rand]]);
                let answer = await question;

                if (qs[rand].type == 'input') {
                    log(qs[rand].answer);
                }
                log(answer);
                log('\n');

                used.push(rand);
            } else {
                i--;
            }
        }
    }
})();
