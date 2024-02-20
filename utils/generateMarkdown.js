//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU GPL v3':
      return '![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause': 
      return '![License: ${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'Apache 2.0':
      return '![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'N/A':
        return '';
  }
}

//function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause': 
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'N/A':
      return '';
  }
}

//function that returns the license section of README
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT license.';
    case 'GNU GPL v3':
      return 'This project is licensed under the GNU GPL v3 license.';
    case 'BSD 3-Clause':
      return 'This project is licensed under the BSD 3-Clause license.';
    case 'Apache 2.0':
      return 'This project is licensed under the Apache 2.0 license.';
    case 'N/A':
      return '';
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents 
  - [Usage](#usage)
  - [Install](#install)
  - [Tests](#tests)
  - [Features](#features)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Usage
  ${data.usage}

  ## Install
  ${data.install}

  ## Tests
  ${data.tests}

  ## Feature
  ${data.features}

  ## Contribution 
  ${data.contribution}

  ## Credits
  ${data.credits}

  ## Questions
  You can send me any questions at ${data.email}
  You can also visit my GitHub at ${data.github}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;