const fs = require('fs'); //file system module for reading and writing files
const inquirer = require('inquirer');// inquirer module for prompting user
const {Circle, Triangle, Square} = require('./lib/shapes');// importing the logo generating function

// Array of questions for the user to provide project details
const questions = [
    { name: 'logotext', message: 'Select the three text characters for your logo !',validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    }, },
    { name: 'txtcolor', message: 'Enter which color you would like for the text ! Color KeyWord Or Hexadecimal!' },
    { name: 'shape', message: 'Which shape would you like?', type: 'checkbox', choices: [
      'Triangle',
      'Circle',
      'Square',
    ]},
    { name: 'shapecolor', message: 'Enter which color you would like for your shape ! Color KeyWord Or Hexadecimal!' },
  ];
  
  inquirer
  .prompt(questions)
  .then((data) => {
    //TODO: Generate logo content using user's answers
    path = 'newLogo.svg';
    let answers = data;
    
    let shapetype;
    switch (answers.shape[0]) {
      case 'Circle':
        shapetype = new Circle();
        break;
      case 'Square':
        shapetype = new Square();
        break;
        case 'Triangle':
        shapetype = new Triangle();
        break;
      default:
        break;
    }

    shapetype.setColor(answers.shapecolor);
    // 
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapetype.render()}
    <text x="50%" y="50%" fill="${answers.txtcolor}" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="48">${answers.logotext}</text>
  </svg>`;
  
  fs.writeFile(path, svg, (err) => {
    if (err) {
      console.error('Logo Not Generated! Heres Why..:', err);
    } else {
      console.log(`Logo Created in newlogo.svg`);
    }
  });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Error:', error);
    } else {
      // Something else went wrong
    }
  });