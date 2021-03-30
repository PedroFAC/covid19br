import faker from 'faker';
import { arrayGenerator } from '../../functions/arrayGenerator';

const mockCountries = arrayGenerator(192).map(() => {
  return {
    country: faker.address.country(),
    cases: faker.datatype.number(),
    confirmed: faker.datatype.number(),
    deaths: faker.datatype.number(),
    recovered: faker.datatype.number(),
  };
});

export default mockCountries;
