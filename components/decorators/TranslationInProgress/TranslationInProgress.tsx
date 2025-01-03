import React, {ReactNode} from 'react'
// Styles
import './TranslationInProgress.css'

interface FolioReferenceProps {
  children: ReactNode
}

const TranslationInProgress: React.FC<FolioReferenceProps> = ({children}) => (
  <span className="in-progress">{children}</span>
)

export default TranslationInProgress
