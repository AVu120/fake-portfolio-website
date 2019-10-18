let faker = require("faker");

let generateWorkers = () => {
  let workers = [];

  for (let id = 0; id < 30; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let url = faker.internet.url();
    let title = faker.name.title();

    workers.push({
      objectID: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      url: url,
      title: title
    });
  }

  return { data: workers };
};

module.exports = generateWorkers;
