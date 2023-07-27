import { createRestClient } from 'masto';

const masto = createRestClient({
  url: 'https://example.com',
});

const app = await masto.v1.apps.create({
  clientName: 'My app',
  redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
  scopes: 'read write',
  website: 'example.com',
});

console.log(app);
