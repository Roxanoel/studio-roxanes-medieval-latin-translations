import {defineField, defineType} from 'sanity'

export const msEditorType = defineType({
  name: 'msEditor',
  title: 'MS Editor',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
