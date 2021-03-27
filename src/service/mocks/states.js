import faker from 'faker';

const mockStates = Array(27)
  .fill(0)
  .map(() => {
    return {
      uf: faker.address.stateAbbr(),
      state: faker.address.stateAbbr(),
      cases: faker.datatype.number(),
      deaths: faker.datatype.number(),
      suspects: faker.datatype.number(),
      refuses: faker.datatype.number(),
    };
  });

export default mockStates;
