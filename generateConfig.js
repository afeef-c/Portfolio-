const fs = require('fs');

const configContent = `
window.config = {
  EMAILJS_USER_ID: '${process.env.EMAILJS_USER_ID}',
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
};
`;

fs.writeFileSync('./public/config.js', configContent);
