import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  }
};

export default config;
