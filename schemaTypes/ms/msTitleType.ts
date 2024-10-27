import {defineField, defineType} from 'sanity'

export const msTitleType = defineType({
  name: 'msTitle',
  title: 'MS Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'wasGivenByEditor',
      type: 'boolean',
    }),
  ],
})
