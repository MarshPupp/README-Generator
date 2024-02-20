// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'GNU GPL v3':
      return `![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'BSD 3-Clause': 
      return '![License: ${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'Apache 2.0':
      return `![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return `(https://www.gnu.org/licenses/gpl-3.0`;
    case 'BSD 3-Clause': 
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Apache 2.0':
      return `(https://opensource.org/licenses/Apache-2.0`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return '## License\n\nThis project is licensed under the ${license} license.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
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

  ${renderLicenseSection(data.license)} <br>
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;