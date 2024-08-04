#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.bold("********* Welcome to our Student Managment system*********"));
const ranNum = Math.round(10000 + Math.random() * 90000);
// Math.round: Returns a supplied numeric expression rounded to the nearest integer. 
//Math.random: Returns a pseudorandom number between 0 and 1.
let stuBal = 0;
let stuAns = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: (chalk.magentaBright.bold("Enter student name:")),
        validate: function (name) {
            if (name.trim() !== "") {
                return true;
            }
            return (chalk.redBright.bold("Please Enter name"));
        }
    },
    {
        name: "Courses",
        type: "list",
        message: (chalk.magentaBright.bold("kindly select the course for Admission")),
        choices: ["MS office", "Graphic Designing", "Html", "Web Development", "App Development"]
    }
]);
const fee = {
    "MS office": 2000,
    "Graphic Designing": 3000,
    "Html": 2500,
    "Web Development": 3500,
    "App Development": 4000
};
console.log(chalk.yellow.bold(`\n Tutionfees : ${fee[stuAns.Courses]}/-\n`));
console.log(chalk.bgGray.bold(`\n Balance: ${stuBal} \n`));
let payMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: (chalk.magentaBright.bold("kindly select payment Method:")),
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash", "SadaPay", "NayaPay"]
    },
    {
        name: "Amount",
        type: "input",
        message: (chalk.magentaBright.bold("Transfer Money:")),
        validate: function (amount) {
            if (amount.trim() !== "") {
                return true;
            }
            return (chalk.redBright.bold("Please Enter Amount"));
        },
    }
]);
console.log(chalk.green.bold(`\n your Selected Payment Method: ${payMethod.payment}`));
const Coursefees = fee[stuAns.Courses];
const CourseAmount = parseFloat(payMethod.Amount); // parseFloat : Converts a string to a floating-point number.
if (Coursefees === CourseAmount) {
    console.log(chalk.blue.bold.underline(`\n Congratulation! you have successfully enrolled in ${stuAns.Courses} \n`));
    let Ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: (chalk.magenta.bold("What would you like to do next:")),
            choices: ["View Status", "Exit"]
        }
    ]);
    if (Ans.select === "View Status") {
        console.log(chalk.bgCyan.blackBright.bold(`\n======= Your Status =======\n`));
        console.log(chalk.blueBright.bold(`Student Name: ${stuAns.students}`));
        console.log(chalk.blueBright.bold(`Student ID: ${ranNum}`));
        console.log(chalk.blueBright.bold(`Course: ${stuAns.Courses}`));
        console.log(chalk.blueBright.bold(`Paid Fees: ${CourseAmount}`));
        console.log(chalk.blueBright.bold(`Balance: ${stuBal += CourseAmount}`));
    }
    else {
        console.log(chalk.greenBright.bold.italic(`\n Exit Student Management System , Thankyou! for Enrolled \n`));
    }
}
else {
    console.log(chalk.redBright.underline.bold(`\nKindly pay valid Amount due to Course\n`));
}
