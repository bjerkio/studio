import { documentInternationalization } from '@sanity/document-internationalization';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Bjerk',

  projectId: '1zkk2ha0',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'no', title: 'Norwegian' },
      ],
      schemaTypes: ['project'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
