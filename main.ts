#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold.bgWhiteBright("\t\t----currency convertor-----"))
//object representing currency exchange rates
const currency: any = {
  usd: 1, //base currency
  pakistani_Rupee: 277.54,
  Indian_Rupee: 83.3,
  Afghan_Afghani: 71.23,
  Turkish_lira: 32.07,
  Sri_Lankan: 298.61,
  Dubai: 3.67,
  EUR: 0.92,
  Australian_Dollar: 1.52,
  Canadian_Dollar: 1.36,
  Swiss_Franc: 0.9,
  Chinese_Yuan_Renminbi: 7.23,
  Maldivian_Rufiyaa: 15.46,
  Bahraini_Dinar: 0.38,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.green("Select the currency to convert from:"),
    type: "list",
    choices: [
      "usd",
      "pakistani_Rupee",
      "Indian_Rupee",
      "Afghan_Afghani",
      "Turkish_lira",
      "Sri_Lankan",
      "Dubai",
      "EUR",
      "Australian_Dollar",
      "Canadian_Dollar",
      "Swiss_Franc",
      "Chinese_Yuan_Renminbi",
      "Maldivian_Rufiyaa",
      "Bahraini_Dinar",
    ],
  },

  {
    name: "to",
    message: chalk.yellow("Select the currency to convert into:"),
    type: "list",
    choices: [
      "usd",
      "pakistani_Rupee",
      "Indian_Rupee",
      "Afghan_Afghani",
      "Turkish_lira",
      "Sri_Lankan",
      "Dubai",
      "EUR",
      "Australian_Dollar",
      "Canadian_Dollar",
      "Swiss_Franc",
      "Chinese_Yuan_Renminbi",
      "Maldivian_Rufiyaa",
      "Bahraini_Dinar",
    ],
  },

  {
    name: "amount",
    message: chalk.red("Enter the amount to convert:"),
    type: "number",
  },
]);
//extract exchange rates for selected currencies
let amountFrom = currency[user_answer.from];
let amountTo = currency[user_answer.to];
let user_amount = user_answer.amount;
//calculate conversion
let baseAmount = user_amount / amountFrom;
let converteAmount = baseAmount * amountTo;
//output the converted amount
console.log(chalk.magenta("converted amount :", converteAmount));
