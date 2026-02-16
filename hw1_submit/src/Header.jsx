import './Header.css'

function Header({ title }) {
  // VIEW: purely presentational component.
  // Title is passed in by App through props.
  return (
    <header className="header">
      {/* Assignment requires header text in an h1 element. */}
      <h1>{title}</h1>
    </header>
  )
}

export default Header
