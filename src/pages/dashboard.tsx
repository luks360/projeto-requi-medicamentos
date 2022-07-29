import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'

const Dashboard: NextPage = () => {
    return (
    <>
        <body>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Header />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="page-breadcrumb bg-white" >
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Requisições criadas</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li className="ms-auto"><span className="counter text-success">0</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Requisições em progresso</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li className="ms-auto"><span className="counter text-purple">4</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Requisições finalizadas</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li className="ms-auto"><span className="counter text-info">16</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="white-box">
                                    <div className="d-md-flex mb-3">
                                        <h3 className="box-title mb-0">Requisições recentes</h3>
                                        <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                                            <div className="newSolic">
                                                <button type="button" className="btn btn-outline-success" data-toggle="modal"
                                                    data-target="#addSolicitacaoModal">
                                                    Criar requisição
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="addSolicitacaoModal" className="modal fade" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="addSolicitacaoModalLabel">Criar requisição</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form method="post" id="insert_form">
                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Medicamento</label>
                                                            <div className="col-sm-10">
                                                                <input name="medicamento" type="text" className="form-control"
                                                                    id="medicamento" placeholder="Digite o medicamento" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Quantidade</label>
                                                            <div className="col-sm-10">
                                                                <textarea name="quantidade" type="text" className="form-control" id="quantidade" placeholder="Digite a quantidade"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Comprimido ou em gotas?</label>
                                                            <div className="col-sm-10">
                                                                <input name="comOrGo" type="text" className="form-control" id="comOrGo" placeholder="Digite se é comprimido ou em gotas" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-10">
                                                                <input type="submit" name="CadUser" id="CadUser" value="Criar" className="btn btn-outline-success" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table no-wrap">
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
        </body>
    </>
    )
}

export default Dashboard