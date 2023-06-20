import { defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Overrides the page title',
    },
    {
      name: 'keywords',
      type: 'string',
      description: 'Separate keywords with a comma',
    },
    {
      name: 'description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(300).optional(),
      options: {
        maxLength: 300,
      },
    },
    {
      name: 'image',
      type: 'image',
    },
  ],
});
