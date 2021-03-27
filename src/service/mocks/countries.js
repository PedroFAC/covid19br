import faker from 'faker';

const mockCountries = Array(192)
  .fill(0)
  .map(() => {
    return {
      country: faker.address.country(),
      cases: faker.datatype.number(),
      confirmed: faker.datatype.number(),
      deaths: faker.datatype.number(),
      recovered: faker.datatype.number(),
    };
  });

export default mockCountries;
