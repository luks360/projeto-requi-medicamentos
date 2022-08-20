import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {

    const {data: session} = useSession();

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
                                {/* {status && <p>Loading..</p>} */}
                            {!session && (
                                <>
                                    <button
                                        className="login-with-google-btn"
                                        onClick={() => {
                                            signIn("google", { callbackUrl: "http://localhost:5500" })
                                            
                                        }
                                    }
                                        >
                           
                                        Google
                                    </button>

                                </>
                            )}
                            {session && (
                                
                                <>
                                <div className="dropright">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><Image style={{verticalAlign: "middle"}} src={session.session.user.image} className="rounded-circle" width="40" height="40"/><h5 style={{display: "inline-block", paddingLeft: "5px", paddingRight: "10px", color: "#2ab152"}}>{session.session.user.name.split(" ")[0]}</h5></a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><Link href="dashboard"><a className="dropdown-item">Dashboard</a></Link></li>
                                        <li><Link href="profile"><a className="dropdown-item">Perfil</a></Link></li>
                                        <li><Link href="solicitations"><a className="dropdown-item">Solicitações</a></Link></li>
                                        <li><Link href="/"><a className="dropdown-item" onClick={() => signOut()}>Logout</a></Link></li>
                                    </ul>
                                </div>
                                </>
                            )}                              
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    )  
}