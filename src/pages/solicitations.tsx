import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'

const Solicitations: NextPage = () => {
    return (
        <>
            <div className="body">
                <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                    <Header />
                    <Sidebar />
                    <div className="page-wrapper">
                        <div className="page-breadcrumb bg-white">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <h4 className="page-title">Solicitações</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="white-box">
                                        <h3 className="box-title">Todas as solicitações</h3>
                                        <div className="table-responsive">
                                            <table className="table text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th className="border-top-0">#</th>
                                                        <th className="border-top-0">Medicamento</th>
                                                        <th className="border-top-0">Quantidade</th>
                                                        <th className="border-top-0">Comprimido ou gotas</th>
                                                        <th className="border-top-0">Situação</th>
                                                        <th className="border-top-0">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="div" className="featurette-divider" />
                <Footer />
            </div>
        </>
    )
}

export default Solicitations