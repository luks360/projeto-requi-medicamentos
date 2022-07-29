import Link from "next/link";

export default function Header() {

    return (
        <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <div className="logo-icon">
                            <img className="iconP" src="img/logoP.png" alt="homepage" />
                        </div>
                        <span>
                            <img className="logo-text" src="img/logoText.png" alt="homepage" />
                        </span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link href="/">
                                    <a className="nav-link active" aria-current="page">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contato</a>
                                </li>
                            </ul>
                            <div className="data">
                                <div id="login"></div>                               
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    )
    
}