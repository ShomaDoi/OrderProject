import logoimg from '../assets/logo.jpg'

export default function Header()    {
   return <header id="main-header">
        <div id="title">
            <img src={logoimg} id="img"/>
            <h1>Food</h1>

        </div>
        <nav>
            <button>
                cart(0)
            </button>
        </nav>
    </header>
   
}