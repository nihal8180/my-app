import image from './image/th.jpg'
export default function Header(){
    return(
      <header>
        <nav className="nav">
          <img src={image} alt=""  className="nav-logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>
    )
  }