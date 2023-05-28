import { defineType } from 'sanity';

export const privacyOptions = defineType({
  name: 'privacy-options',
  type: 'object',
  title: 'Privacy options',
  fields: [
    {
      name: 'showPublicly',
      type: 'boolean',
      title: 'Show publicly / anonymize',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: 'anonymizedName',
      type: 'string',
      title: 'Anonymized name',
      description: 'Name to show publicly if the user has chosen to anonymize',
    },
  ],
});
