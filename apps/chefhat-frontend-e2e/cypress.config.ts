import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run chefhat-frontend:dev',
      },
      ciWebServerCommand: 'nx run chefhat-frontend:serve-static',
      webServerConfig: {
        timeout: 30000,
      },
    }),
    baseUrl: 'http://localhost:3000',
  },
});
