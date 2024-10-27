import {defineField, defineType} from 'sanity'

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
      hidden: ({document}) => !document?.name,
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
      of: [{type: 'block'}],
    }),
  ],
})
