import inquirer from "inquirer";

import chalk from "chalk";

const formulario = [
  {
    type: "input",
    name: "nome",
    message: "Digitir seu nome: ",
  },

  {
    type: "number",
    name: "idade",
    message: "Digitir sua idade",
  },

  {
    type: "input",
    name: "email",
    message: "Digite seu e-mail: ",
  },

  {
    type: "password",
    name: "senha",
    message: "Digite sua senha: ",
  },

  {
    type: "input",
    name: "profissao",
    message: "Digite sua profissão: ",
  },

  {
    type: "checkbox",
    name: "sexo",
    message: "Marque a opção do seu sexo: ",
    choices: ["Masculino", "Feminino"],
  },
];
inquirer
  .prompt(formulario)
  .then(function (answers) {
    console.log("Nome: ", chalk.red(answers.nome));
    console.log("Idade: ", chalk.black(answers.idade));
    console.log("Email: ", chalk.red(answers.email));
    console.log("Senha: ", chalk.black(answers.senha));
    console.log("Profissão: ", chalk.red(answers.profissao));
    console.log("Sexo: ", chalk.red(answers.sexo));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(chalk.orange("Não é possível executar o prompt"));
    } else {
      console.log(chalk.orange(error));
    }
  });
