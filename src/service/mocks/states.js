import faker from 'faker';

const mockStates = Array(27)
  .fill(0)
  .map(() => {
    return {
      uf: faker.address.stateAbbr(),
      state: faker.address.stateAbbr(),
      cases: faker.random.number(),
      deaths: faker.random.number(),
      suspects: faker.random.number(),
      refuses: faker.random.number(),
    };
  });

export default mockStates;
