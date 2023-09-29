import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'Enter your age'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'what is our gender',
        choices: ['mail', 'female', 'prefer not say']
    }
]);
console.log("your name is" + answer.name + ",your age is " + answer.age + ",your gender" + answer.gender);
