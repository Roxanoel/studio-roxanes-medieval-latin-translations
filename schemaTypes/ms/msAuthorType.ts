import {defineField, defineType} from 'sanity'

export const msAuthorType = defineType({
  name: 'msAuthor',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
