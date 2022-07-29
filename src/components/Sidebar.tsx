import Link from "next/link";

export default function Sidebar() {

    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item pt-2">
                            <Link href="dashboard">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                    aria-expanded="false">
                                    <i className="fa fa-chart-bar" aria-hidden="true"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link href="profile">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                    aria-expanded="false">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <span className="hide-menu">Perfil</span>
                                </a>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link href="solicitations">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                    aria-expanded="false">
                                    <i className="fa fa-table" aria-hidden="true"></i>
                                    <span className="hide-menu">Solicitações</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}