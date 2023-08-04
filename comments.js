// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Handle POST request to '/comment'
app.post('/comment', (req, res) => {
    const { comment } = req.body;
    console.log(comment);
    res.json({ message: 'Comment received' });
    }
);

// Start web server
app.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
}
);

// Path: skills-copilot-codespaces-vscode/index.js
// Compare this snippet from skills-copilot-codespaces-vscode/member.js:
// function skillsMember() {
//   const skills = new Skills({ token: process.env.SKILLS_TOKEN });
//   const member = skills.member(process.env.SKILLS_MEMBER_ID);
//   return member;
// }

