import { defineType } from 'sanity';

export const metadata = defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'searchEngine',
      type: 'searchEngine',
      validation: Rule => Rule.required(),
    },
    {
      name: 'socialMedia',
      type: 'socialMedia',
      validation: Rule => Rule.required(),
    },
  ],
});

export const searchEngine = defineType({
  name: 'searchEngine',
  title: 'Search engine',
  type: 'object',
  fields: [
    {
      name: 'Title',
      type: 'string',
      validation: Rule => Rule.min(20).max(155),
      description:
        'The ideal length is 50 – 60 characters. When exceeding this limit, search engines will truncate the title.',
    },
    {
      name: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.min(70).max(250),
      description:
        'Minimum length is 70 characters, and ideal is between 70 to 155 characters. When exceeding this limit, search engines will truncate the description.',
    },
  ],
});

export const socialMedia = defineType({
  name: 'socialMedia',
  title: 'Social media',
  type: 'object',
  fields: [
    {
      name: 'Title',
      type: 'string',
      description:
        'social media title. The ideal length is 47 characters. When exceeding this limit, social media will truncate the title. Linkedin will truncate the title at 119 characters.',
    },
    {
      name: 'Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.min(100).max(250),
    },
    {
      name: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      description:
        'social media image. The ideal size is 1200 x 630 pixels. When proviing multiple images, the first will be used as the main image. Some platforms will allow user to choose which image to use.',
    },
  ],
});
