import { defineType } from 'sanity';

export const Metadata = defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'searchEngine',
      type: 'searchEngine',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'socialMedia',
      type: 'socialMedia',
      validation: (Rule: { required: () => any }) => Rule.required(),
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
      description:
        'search engine title. The ideal length is 50–60 characters. When exceeding this limit, search engines will truncate the title.',
    },
    {
      name: 'Description',
      type: 'string',
      description:
        'search engine description. minimum length is 70 characters, and ideal is between 70 to 155 characters. When exceeding this limit, search engines will truncate the description.',
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
      type: 'string',
      description:
        'social media description. Shuold not exceed 85 characters to fit most platforms.',
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
