import './../styles/Navbar.css';

function Navbar(){
    return(
        <>
        <div className="nav_container">
        <nav className="navbar">
        <a className="navbar-brand" href="http://www.google.com/">Home</a>
        <a className="navbar-brand" href="https://www.google.com/search?q=bollywood">Bollywood</a>
        <a className="navbar-brand" href="https://www.google.com/search?q=technology">Technology</a>
        <a className="navbar-brand" href="https://www.google.com/search?q=hollywood">Hollywood</a>
        <a className="navbar-brand" href="https://www.google.com/search?q=fitness">Fitness</a>
        <a className="navbar-brand" href="https://www.google.com/search?q=food">Food</a>        
        </nav>
        </div>
        </>
 
    )
}

export default Navbar;