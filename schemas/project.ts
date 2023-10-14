import { HiBolt } from 'react-icons/hi2';
import { defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  icon: HiBolt,
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic', default: true },
    { name: 'extended', title: 'Extended' },
    { name: 'metadata', title: 'Metadata' },
  ],
  fieldsets: [
    {
      name: 'date',
      description:
        'Year from and to when the project was active. Leave to blank if ongoing.',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      group: 'basic',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'basic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project. Leave blank to use the name.',
      group: 'extended',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'The slug is used to generate the page URL',
      type: 'slug',
      group: 'metadata',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'customer',
      title: 'Customer',
      group: 'basic',
      type: 'reference',
      to: [{ type: 'organization' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'yearFrom',
      title: 'From',
      type: 'number',
      group: 'basic',
      fieldset: 'date',
      validation: Rule => Rule.required(),
      // default to current year
      initialValue: new Date().getFullYear(),
    },
    {
      name: 'yearTo',
      fieldset: 'date',
      group: 'basic',
      title: 'To',
      type: 'number',
    },
    {
      title: 'Language',
      type: 'string',
      name: 'language',
      group: 'metadata',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'description',
      title: 'Description',
      group: 'basic',
      description: `
        Short introduction of the project. Try to include mission, vision, goals and results.
        Used in project lists and search results.
        `,
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(300).required(),
      options: {
        maxLength: 300,
      },
    },
    {
      name: 'preamble',
      description: 'Short introduction of the project.',
      title: 'Preamble',
      group: 'extended',
      type: 'basicBlockContent',
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      group: 'extended',
      type: 'text',
      rows: 4,
    },
    {
      name: 'technologies',
      title: 'Technologies',
      group: 'metadata',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    },
    {
      name: 'body',
      title: 'Body',
      group: 'extended',
      type: 'blockContent',
    },
    {
      name: 'links',
      type: 'array',
      group: 'metadata',
      title: 'Links',
      of: [{ type: 'link' }],
    },
    {
      name: 'metadata',
      title: 'Metadata',
      group: 'metadata',
      type: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'customer.name',
      media: 'image',
    },
  },
});
