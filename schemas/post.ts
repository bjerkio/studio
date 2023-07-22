import { HiNewspaper } from 'react-icons/hi2';
import { defineType } from 'sanity';
import { languages } from '../languages';

export const post = defineType({
  name: 'post',
  title: 'Post',
  icon: HiNewspaper,
  type: 'document',
  fields: [
    {
      title: 'Language',
      type: 'string',
      name: 'language',
      options: {
        list: languages,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',

      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection: Record<'title' | 'media', string>) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
