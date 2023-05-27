import { HiBolt } from 'react-icons/hi2';
import { defineType } from 'sanity';
import { languages } from '../languages';

export const project = defineType({
  name: 'project',
  title: 'Project',
  icon: HiBolt,
  type: 'document',
  fieldsets: [
    {
      name: 'metadata',
      options: { columns: 2 },
    },
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
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Language',
      type: 'string',
      name: 'language',
      fieldset: 'metadata',
      options: {
        list: languages,
      },
      initialValue: 'en',
    },
    {
      name: 'privacy',
      type: 'privacy-options',
      title: 'Personvern',
      fieldset: 'metadata',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Short introduction of the project. Try to include mission, vision, goals and results.',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200).required(),
      options: {
        maxLength: 200,
      },
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'organization' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'yearFrom',
      title: 'From',
      type: 'number',
      fieldset: 'date',
      validation: Rule => Rule.required(),
      // default to current year
      initialValue: new Date().getFullYear(),
    },
    {
      name: 'yearTo',
      fieldset: 'date',
      title: 'To',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'link' }],
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
