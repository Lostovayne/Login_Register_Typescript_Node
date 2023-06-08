import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}
