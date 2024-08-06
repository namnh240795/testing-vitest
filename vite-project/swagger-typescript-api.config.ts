import { defaultConfig } from 'swagger-typescript-api-es';

export default defaultConfig({
  name: 'api-axios.ts',
  output: './src/apis/axios-gentype',
  url: 'http://localhost:3000/api-json',
  httpClientType: 'axios',
});