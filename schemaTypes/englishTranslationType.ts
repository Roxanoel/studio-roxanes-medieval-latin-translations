import {defineField, defineType} from 'sanity'
import {LuFileDigit, LuMessageCircle} from 'react-icons/lu'

// Components
import FolioReference from '../components/decorators/FolioReference/FolioReference'

export const englishTranslationType = defineType({
  name: 'englishTranslation',
  title: 'English Translation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      // hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'source',
      type: 'reference',
      to: [{type: 'msInfo'}],
      validation: (rule) => rule.required().error(`Please add information about the manuscript`),
    }),
    // TODO: Add a reference to the original (Latin) text?
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {
                title: 'Folio Reference',
                value: 'folioReference',
                component: FolioReference,
                icon: LuFileDigit,
              },
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'Original Latin Term',
                type: 'object',
                fields: [{name: 'term', type: 'string'}],
                icon: () => 'Lat',
              },
              {
                name: 'Translation Note',
                type: 'object',
                fields: [{name: 'note', type: 'string'}],
                icon: LuMessageCircle,
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'chapters',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'chapter'}]}],
    }),
  ],
})
