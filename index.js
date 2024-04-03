#! /usr/bin/env node
import inquirer from "inquirer";
let nyBalance = 10000;
let myPin = 1234;
console.log("Pin is: 1234");
//enter pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin ",
        type: "number"
    }
]);
// check pin and give options
if (pinAnswer.pin === myPin) {
    console.log("Pincode Correct !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your option ",
            type: "list",
            choices: ["Whitdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation == "Whitdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select your Amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 20000, "Enter manually"]
            }
        ]);
        if (amountAns.amount == "Enter manually") {
            let manualaAmoununt = await inquirer.prompt([
                {
                    name: "amount1",
                    message: "Enter Your Amonut ",
                    type: "number"
                }
            ]);
            if (manualaAmoununt.amount1 > nyBalance) {
                console.log("You have not Enough Balance");
            }
            else {
                nyBalance -= manualaAmoununt.amount1;
                console.log(`Your Balance is: ${nyBalance}`);
            }
        }
        else if (amountAns.amount > nyBalance) {
            console.log("You have not Enough Balance");
        }
        else if (amountAns.amount <= nyBalance) {
            nyBalance -= amountAns.amount;
            console.log(`Your Balance is ${nyBalance}`);
        }
    }
    else if (operationAns.operation == "Check Balance") {
        console.log(`Your Balance is: ${nyBalance}`);
    }
}
else {
    console.log("Invalid Pincode ");
}
