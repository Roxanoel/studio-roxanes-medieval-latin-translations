import {defineField, defineType} from 'sanity'
import {LuFileDigit, LuMessageCircle} from 'react-icons/lu'

// Components
import FolioReference from '../components/decorators/FolioReference/FolioReference'

export const chapterType = defineType({
  name: 'chapter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'orderRank', // for sorting
      type: 'number',
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
      name: 'book',
      type: 'reference',
      to: [{type: 'englishTranslation'}],
    }),
  ],
})
