import { defineType } from 'sanity';

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'target',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'New tab', value: '_blank' },
          { title: 'Same tab', value: '_self' },
        ],
      },
      initialValue: '_blank',
    },
    {
      name: 'url',
      type: 'string',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
});
