import React, {ReactNode} from 'react'
// Styles
import './FolioReference.css'

interface FolioReferenceProps {
  children: ReactNode
}

const FolioReference: React.FC<FolioReferenceProps> = ({children}) => (
  <span className="folio-reference">{children}</span>
)

export default FolioReference
