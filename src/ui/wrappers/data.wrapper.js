const fs = require('fs');

const testUsers = JSON.parse(fs.readFileSync('src/ui/resources/test-users.json'));

const dataWrapper = {
  getAdminUser() {
    return testUsers.admin;
  },
};

module.exports = dataWrapper;
