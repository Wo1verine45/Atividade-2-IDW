import { TitlesSection } from '../TitlesSection'
import './Header.css'

export function Header() {
  return (
    <header className='header'>
      <TitlesSection note={true}/>
    </header>
  )
}