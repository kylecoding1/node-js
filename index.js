import fs from 'fs';
import inquirer from 'inquirer';
import { questions } from './questions.js';
import { generateReadme } from './generateReadme.js';

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
});
