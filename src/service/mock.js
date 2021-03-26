import { createServer } from 'miragejs';
import mockCountries from './mocks/countries';
import mockStates from './mocks/states';
import faker from 'faker';

// const server = createServer({
//   routes() {
//     this.urlPrefix = 'https://covid19-brazil-api.now.sh/api/report/v1';
//     this.get('/vaccines', {
//       countries: [
//         { name: 'Brazil', quantity: 10000 },
//         { name: 'USA', quantity: 12000 },
//       ],
//     });
//   },
// });

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    routes() {
      this.urlPrefix = 'https://covid19-brazil-api.now.sh/api/report/v1';
      this.get('/countries', {
        data: mockCountries,
      });
      this.get('/', { data: mockStates });
      this.get('/brazil', {
        data: {
          country: 'Brazil',
          cases: faker.random.number(),
          confirmed: faker.random.number(),
          deaths: faker.random.number(),
          recovered: faker.random.number(),
          updated_at: Date.now(),
        },
      });
    },
  });

  return server;
}
