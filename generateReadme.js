function generateReadme(answers) {
  return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue.svg)
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any additional questions, please reach out to me at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}
export { generateReadme };