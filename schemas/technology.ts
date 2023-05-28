import { HiCpuChip } from 'react-icons/hi2';
import { defineType } from 'sanity';

export const technology = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  icon: HiCpuChip,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200).optional(),
    },
  ],
});