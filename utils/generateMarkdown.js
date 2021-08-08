// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
licenseBadge = [];

function renderLicenseBadge(responses) {
  if (responses.license == 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}


// Created a function to generate markdown for README
function generateMarkdown(responses) {
  let contents = [`## Table of Contents`];

  if (responses.install !== "") {
    contents += `
    * [Installation](#Installation)`;
    installContents = `## Installation

    ${responses.install}`;
  } else {
    installContents = "";
  }

  if (responses.usage !== "") {
    contents += `
    * [Usage](#Usage)`;
    usageContents = `## Usage

   ${responses.usage}`;
  } else {
    usageContents = "";
  }

  if (responses.license !== "") {
    contents += `
    * [License](#License)`;
    licenseContents = `## License

   ${responses.license}`;
  }

  if (responses.contribute !== "") {
    contents += `
    * [Contributions](#Contributions)`;
    contributeContents = `## Contributions

   ${responses.contribute}`;
  } else {
    contributeContents = "";
  }

  if (responses.test !== "") {
    contents += `
    * [Tests](#Tests)`;
    testContents = `## Tests

   ${responses.test}`;
  } else {
    testContents = "";
  }

  if (responses.questions !== "") {
    contents += `
    * [Questions](#Questions)`;
    questionsContents = `## Questions

   ${responses.questions}
   ${responses.github}`;
  } else {
    questionsContents = "";
  }

  renderLicenseBadge(responses)


  return `${licenseBadge}
# ${responses.title}

${contents}

## Description

   ${responses.description}

${installContents}
  
${usageContents}

${licenseContents}  

${contributeContents}

${testContents}

${questionsContents}

`;
}

module.exports = generateMarkdown;
