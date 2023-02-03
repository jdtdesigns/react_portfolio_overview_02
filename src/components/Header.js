function Header(props) {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <button onClick={() => props.setPage('landing')}>Home</button>
        <button onClick={() => props.setPage('about')}>About</button>
      </nav>
    </header>
  )
}

export default Header;