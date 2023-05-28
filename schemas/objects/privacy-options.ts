import { defineType } from 'sanity';

export const privacyOptions = defineType({
  name: 'privacy-options',
  type: 'object',
  title: 'Privacy options',
  fields: [
    {
      name: 'hideName',
      type: 'boolean',
      title: 'Hide name / anonymize',
      initialValue: true,
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
