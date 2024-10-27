import {defineField, defineType} from 'sanity'

export const msInfoType = defineType({
  name: 'msInfo',
  title: 'MS Info',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'reference',
      to: [{type: 'msTitle'}],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'msAuthor'}],
    }),
    defineField({
      name: 'editor',
      type: 'reference',
      to: [{type: 'msEditor'}],
    }),
  ],
})
