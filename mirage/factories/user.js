import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `user${i+1}`;
  },
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  jobTitle() {
    return faker.name.jobTitle();
  },
  phoneNumber() {
    return faker.phone.phoneNumber();
  }
});
