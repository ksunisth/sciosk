#!/usr/bin/env node

const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

log(chalk.red(" ▒█▀▀▀█ ▒█░▒█ ▒█▄░▒█ ▀█▀ ▒█▀▀▀█ ▀▀█▀▀ ▒█░▒█ "));
log(chalk.red(" ░▀▀▀▄▄ ▒█░▒█ ▒█▒█▒█ ▒█░ ░▀▀▀▄▄ ░▒█░░ ▒█▀▀█ "));
log(chalk.red(" ▒█▄▄▄█ ░▀▄▄▀ ▒█░░▀█ ▄█▄ ▒█▄▄▄█ ░▒█░░ ▒█░▒█"));
log();
log(chalk.bold("Welcome to Sunisth, the best npm package about Sunisth Kumar."));


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
