import type {StructureResolver} from 'sanity/structure'
import {LuScrollText, LuBookOpenCheck} from 'react-icons/lu'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('englishTranslation')
        .title('English Translations')
        .icon(LuBookOpenCheck),
      S.documentTypeListItem('msInfo').title('Manuscripts').icon(LuScrollText),
    ])
