// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
   * [Description](#description)
   * [Installation](#installation)
   * [User Information](#usage)
   * [Licence](#licence)
   * [Contributors](#contributors)

   
   ## Description
   ${data.description}

   ## Licences 
   ${data.license}

   ## Installation
   ${data.installation}

   ## Contributors
   ${data.contributors}

   ## Usage
   ${data.user}

   ## Test
   ${data.test}

   # Github
   ${data.github}

`;
}

module.exports = generateMarkdown;
