const fs = require('fs'); //file system module for reading and writing files
const inquirer = require('inquirer');// inquirer module for prompting user
const generateLogo = require('./lib/shapes');// importing the logo generating function

// Array of questions for the user to provide project details
const questions = [
    { name: 'logotext', message: 'Select the three text characters for your logo !' },
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
  .then((answers) => {
    //TODO: Generate logo content using user's answers

    console.log(answers);
    
    fs.writeFile('Logo.svg', markdownContent, (err) => { // Write markdown content to README.md file
      if (err) {
        console.error('Error creating logo:', err);
      } else {
        console.log('Logo file has been successfully generated.');
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