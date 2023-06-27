// Import the required modules and shape classes
const fs = require('fs'); // File system module for reading and writing files
const inquirer = require('inquirer'); // Inquirer module for prompting user
const { Circle, Triangle, Square } = require('./lib/shapes'); // Importing the shape classes

// Array of questions for the user to provide project details
const questions = [
  {
    name: 'logotext',
    message: 'Select the three text characters for your logo!',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    },
  },
  {
    name: 'txtcolor',
    message: 'Enter which color you would like for the text! Color Keyword or Hexadecimal!',
  },
  {
    name: 'shape',
    message: 'Which shape would you like?',
    type: 'checkbox',
    choices: [
      'Triangle',
      'Circle',
      'Square',
    ],
  },
  {
    name: 'shapecolor',
    message: 'Enter which color you would like for your shape! Color Keyword or Hexadecimal!',
  },
];

// Function to create the SVG logo
const createSvg = () => {
  inquirer
    .prompt(questions)
    .then((data) => {
      // TODO: Generate logo content using user's answers

      const path = './YourGeneratedLogo/newLogo.svg'; // Path to the output SVG file
      const answers = data; // User's answers from inquirer prompt

      let shapetype;

      // Determine the selected shape based on user's choice
      switch (answers.shape[0]) {
        case 'Circle':
          shapetype = new Circle(); // Create a new instance of the Circle class
          break;
        case 'Square':
          shapetype = new Square(); // Create a new instance of the Square class
          break;
        case 'Triangle':
          shapetype = new Triangle(); // Create a new instance of the Triangle class
          break;
        default:
          break;
      }

      shapetype.setColor(answers.shapecolor); // Set the color of the selected shape

      // Construct the SVG content using the selected shape, text, and colors
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${shapetype.render()} <!-- Render the selected shape -->
          <text x="50%" y="50%" fill="${answers.txtcolor}" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="48">${answers.logotext}</text>
        </svg>`;

      // Write the SVG content to the output file
      fs.writeFile(path, svg, (err) => {
        if (err) {
          console.error('Logo Not Generated! Here\'s Why:', err);
        } else {
          console.log(`Logo Created in newLogo.svg`);
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
};

// Call the createSvg function to start the logo creation process
createSvg();