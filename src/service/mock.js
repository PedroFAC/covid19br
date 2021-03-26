import { createServer } from 'miragejs';

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
      this.get('/vaccines', {
        countries: [
          { country: 'Brazil', cases: 10000 },
          { country: 'USA', cases: 12000 },
        ],
      });
    },
  });

  return server;
}
