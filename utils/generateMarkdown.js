function renderLicenseBadge(license) {
  if (!license) { // If there is no license, return an empty string.
    return '';
  }

  const badges = { // uses a dictionary (object) to map license names to their corresponding badge markdown string.
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      'Open Database License': '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
      'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      'GNU Affero General Public License 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'None': 'None'
  };

  return badges[license] || ''; // returns the badge markdown string corresponding to the provided licence. If the license isn't in the dictionary, it defaults to returning an empyt string.
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
      'Open Database License': 'https://opendatacommons.org/licenses/odbl/',
      'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
      'GNU Affero General Public License 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'None': ''
  };

  return licenseLinks[license] || '';
}

function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);

  return `
  ## License

  This project is licensed under the [${license}](${licenseLink}) license.
  `;
}

function generateMarkdown(responses) {
  return `# ${responses.title}

## Description
${responses.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
${renderLicenseBadge(responses.license)}
${renderLicenseSection(responses.license)}

## Contributing
${responses.contribution}

## Tests
${responses.tests}

## Questions
If you have any questions, you can contact me at [${responses.email}](mailto:${responses.email}). 
You can also find more of my work at [${responses.username}](https://github.com/${responses.username}).
`;
}

module.exports = generateMarkdown;
