import { createServer } from 'miragejs';
import mockCountries from './mocks/countries';
import mockStates from './mocks/states';
import faker from 'faker';

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
          cases: faker.datatype.number(),
          confirmed: faker.datatype.number(),
          deaths: faker.datatype.number(),
          recovered: faker.datatype.number(),
          updated_at: Date.now(),
        },
      });
      this.get('/brazil/uf/CE', {
        state: 'Ceará',
        cases: faker.datatype.number(),
        deaths: faker.datatype.number(),
        suspects: faker.datatype.number(),
        refuses: faker.datatype.number(),
        updated_at: Date.now(),
      });
    },
  });

  return server;
}
