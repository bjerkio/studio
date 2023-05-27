import { verifyOrganisationNumber } from 'norwegian-numbers';
import { HiBuildingOffice } from 'react-icons/hi2';
import { defineType } from 'sanity';

// Schema derived from https://schema.org/Organization

export const organization = defineType({
  name: 'organization',
  type: 'document',
  title: 'Organisasjon',
  icon: HiBuildingOffice,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'legalName',
      type: 'string',
      title: 'Legal Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'address',
      type: 'address',
      title: 'Address',
    },
    // VAT number
    {
      name: 'vatID',
      type: 'string',
      title: 'VAT ID (Norwegian)',
      validation: Rule =>
        Rule.optional().custom(value => {
          const isValid = verifyOrganisationNumber(String(value).trim());
          if (isValid) {
            return true;
          }

          return 'Ugyldig organisasjonsnummer';
        }),
    },
    {
      name: 'privacy',
      type: 'privacy-options',
      title: 'Personvern',
      validation: Rule => Rule.required(),
    },
    {
      name: 'sameAs',
      type: 'array',
      title: 'Samme som',
      description:
        'Link til andre nettsteder som representerer organisasjonen.',
      of: [
        {
          type: 'string',
          validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
        },
      ],
    },
  ],
});
