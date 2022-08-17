import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import CancelButton from '../components/CancelButton'
import { useSession, getSession } from 'next-auth/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Request = {
    id: number,
    medicament: string,
    quant: number,
    type: string,
    status: number,
    ID_patient: string
}

type DashboardProps = {
    requests: Request[]
}



const Dashboard: NextPage<DashboardProps> = ({ requests }: DashboardProps) => {

    const { data: session, status } = useSession()

    const cadastrarSoli = e => {
        e.preventDefault()
        const medicament = (document.querySelector("#medicamento") as HTMLInputElement)!.value
        const quant = (document.querySelector("#quantidade") as HTMLInputElement)!.value
        const type = (document.querySelector("#comOrGo") as HTMLInputElement)!.value
        const status = "1"
        const ID_patient = session.token.sub
        const name = session.token.name
        const contact = session.token.email
        const URL = `http://127.0.0.1:5000/patients/${ID_patient}/requests`;

        const rqt = { "medicament": medicament, "quant": quant, "type": type, "status": status, "id_patient": ID_patient, "name": name, "contact": contact }
        axios.post(URL, rqt).then(function (resposta) {
            console.log("Solicitação cadastrada!")
        });
    }

    const editarSoli = e => {
        e.preventDefault()
        const id = (document.querySelector("#buttonSE") as HTMLButtonElement)!.value
        const medicament = (document.querySelector("#emedicamento") as HTMLInputElement)!.value
        const quant = (document.querySelector("#equantidade") as HTMLInputElement)!.value
        const type = (document.querySelector("#ecomOrGo") as HTMLInputElement)!.value
        const status = "1"
        const URL = `http://127.0.0.1:5000/patients/requests/${id}`;

        const rqt = { "medicament": medicament, "quant": quant, "type": type, "status": status }
        axios.put(URL, rqt).then(function (resposta) {
            console.log("Solicitação atualizada!")
        });
    }


    const cancelSoli = e => {
        e.preventDefault()
        const id = (document.querySelector("#buttonSC") as HTMLButtonElement)!.value
        const data = { "status": 1 }
        axios.patch(`http://127.0.0.1:5000/patients/requests/${id}/status`, data).then(response => {
            console.log(response)
        })
    }

    if (status === 'authenticated') {
        return (
            <>
                <div className="body">
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
                                    <div className="col-lg-3 col-md-12">
                                        <div className="white-box analytics-info">
                                            <h3 className="box-title">Requisições <br /> criadas</h3>
                                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                                <li className="ms-auto"><span className="counter text-warning">0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="white-box analytics-info">
                                            <h3 className="box-title">Requisições em progresso</h3>
                                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                                <li className="ms-auto"><span className="counter text-primary">4</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="white-box analytics-info">
                                            <h3 className="box-title">Requisições canceladas</h3>
                                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                                <li className="ms-auto"><span className="counter text-danger">0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="white-box analytics-info">
                                            <h3 className="box-title">Requisições concluidas</h3>
                                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                                <li className="ms-auto"><span className="counter text-success">16</span>
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
                                            <div id="addSolicitacaoModal" className="modal fade" role="dialog"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="addSolicitacaoModalLabel">Criar solicitação</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form method="post" id="insert_form" onSubmit={cadastrarSoli}>
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
                                                                        <input name="quantidade" typeof="text" className="form-control" id="quantidade" placeholder="Digite a quantidade" />
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
                                                                        <button type="submit" name="CadSoli" id="CadSoli" className="btn btn-outline-success" aria-hidden="true">
                                                                            Criar
                                                                        </button>
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
                                                    <tbody id='data-requests'>
                                                        {
                                                            requests?.map((request, index) => {
                                                            
                                                                var s
                                                                if (request.status == 1)
                                                                    s = <button type="button" className="btn btn-outline-primary" style={{ color: "#007bff", borderColor: "#007bff", borderRadius: "20px" }} disabled>Em andamento</button>
                                                                else if (request.status == 2)
                                                                    s = <button type="button" className="btn btn-outline-success" style={{ color: "#28a745", borderColor: "#28a745", borderRadius: "20px" }} disabled>Concluida</button>
                                                                else
                                                                    s = <button type="button" className="btn btn-outline-danger" style={{ color: "#dc3545", borderColor: "#dc3545", borderRadius: "20px" }} disabled>Cancelada</button>
                                                                const data = request.id
                                                                return (
                                                                    <>

                                                                        <tr key={request.id}>
                                                                            <td>{index += 1}</td>
                                                                            <td>{request.medicament}</td>
                                                                            <td>{request.quant}</td>
                                                                            <td>{request.type}</td>
                                                                            <td>{s}</td>
                                                                            <td>
                                                                                <button id="buttonSE" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px" }} data-toggle="modal" value={request.id} data-target="#editSolicitacaoModal"><span className="ti-pencil-alt"></span></button>
                                                                                <CancelButton id={data} />
                                                                                <div id="editSolicitacaoModal" className="modal fade" role="dialog"
                                                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                    <div className="modal-dialog modal-lg" role="document">
                                                                                        <div className="modal-content">
                                                                                            <div className="modal-header">
                                                                                                <h5 className="modal-title" id="editSolicitacaoModalLabel">Editar solicitação</h5>
                                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                    <span aria-hidden="true">&times;</span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="modal-body">
                                                                                                <form method="put" id="insert_form" onSubmit={editarSoli}>
                                                                                                    <div className="form-group row">
                                                                                                        <label className="col-sm-2 col-form-label">Medicamento</label>
                                                                                                        <div className="col-sm-10">
                                                                                                            <input name="medicamento" type="text" className="form-control"
                                                                                                                id="emedicamento" placeholder={request.medicament} />
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="form-group row">
                                                                                                        <label className="col-sm-2 col-form-label">Quantidade</label>
                                                                                                        <div className="col-sm-10">
                                                                                                            <input name="quantidade" typeof="text" className="form-control" id="equantidade" placeholder={request.quant} />
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="form-group row">
                                                                                                        <label className="col-sm-2 col-form-label">Comprimido ou em gotas?</label>
                                                                                                        <div className="col-sm-10">
                                                                                                            <input name="comOrGo" type="text" className="form-control" id="ecomOrGo" placeholder={request.type} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="form-group row">
                                                                                                        <div className="col-sm-10">
                                                                                                            <button type="submit" name="EditSoli" id="editSoli" className="btn btn-outline-success" aria-hidden="true">
                                                                                                                Editar
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                    
                                                                )
                                                                
                                                            })}
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
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    };

    const { data } = await axios.get(`http://127.0.0.1:5000/patients/${session.token.sub}/requests?limit=8`);
    if (data.error != "No requests found") {
        const requests = data.map((dados: Request) => {
            return {
                id: dados.id,
                medicament: dados.medicament,
                quant: dados.quant,
                type: dados.type,
                status: dados.status,
            }
        })
        return {
            props: { session, requests }
        }
    } else {
        return {
            props: { session }
        }
    }
}

export default Dashboard