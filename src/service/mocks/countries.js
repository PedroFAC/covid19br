import faker from 'faker';

const mockCountries = Array(192)
  .fill(0)
  .map(() => {
    return {
      country: faker.address.country(),
      cases: faker.random.number(),
      confirmed: faker.random.number(),
      deaths: faker.random.number(),
      recovered: faker.random.number(),
    };
  });

export default mockCountries;
