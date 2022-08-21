import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import CancelButton from '../components/CancelButton'
import EditButton from '../components/EditButton'
import { useSession, getSession } from 'next-auth/react'
import axios from 'axios'
import { useState } from 'react'
import OffersButton from '../components/OffersButton'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

type Request = {
    id: number,
    medicament: string,
    quant: number,
    type: string,
    status: number,
    ID_patient: string
}

type Offers = {
    id: number,
    medicament: string,
    quant: number,
    type: string,
    price: string,
    status: number,
    id_request: number
}

type SolicitationsProps = {
    requests: Request[]
    offers: Offers[]
}

const Solicitations: NextPage<SolicitationsProps> = ({ requests, offers }: SolicitationsProps) => {
    const { data: session, status } = useSession()
    const [showModalC, setShowModalC] = useState(false)
    const [showModalE, setShowModalE] = useState(false)
    const [showModalO, setShowModalO] = useState(false)
    const [ID, setID] = useState(0);
    const [medicament, setMedicament] = useState('');
    const [quant, setQuant] = useState(0);
    const [type, setType] = useState('');
    const [statusR, setStatus] = useState(0);

    const cadastrarSoli = e => {
        e.preventDefault()
        const medicament = e.target.medicamento.value
        const quant = e.target.quantidade.value
        const type = e.target.comOrGo.value
        const status = "1"
        const ID_patient = session.token.sub
        const name = session.token.name
        const contact = session.token.email
        const URL = `http://127.0.0.1:5000/patients/${ID_patient}/requests`;

        const rqt = { "medicament": medicament, "quant": quant, "type": type, "status": status, "id_patient": ID_patient, "name": name, "contact": contact }
        axios.post(URL, rqt).then(function (resposta) {
            Notify.success('Solicitação cadastrada!')
        });
    }

    const cancelSoli = (id: number) => {
        const data = { "status": 3 }
        axios.patch(`http://127.0.0.1:5000/patients/requests/${id}/status`, data).then(response => {
            Notify.failure('Solicitação cancelada!')
        })
    }

    const editarSoli = e => {
        e.preventDefault()
        const URL = `http://127.0.0.1:5000/patients/requests/${ID}`
        const status = "1"
        const data = { "medicament": e.target.emedicamento.value, "quant": e.target.equantidade.value, "type": e.target.ecomOrGo.value, "status": status }
        console.log(data)
        axios.put(URL, data).then(response => {
            Notify.warning('Solicitação editada!')
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
                                            <div className="d-md-flex mb-3">
                                                <h3 className="box-title">Todas as solicitações</h3>
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
                                                                            id="medicamento" placeholder="Digite o medicamento" required />
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-sm-2 col-form-label">Quantidade</label>
                                                                    <div className="col-sm-10">
                                                                        <input name="quantidade" typeof="text" className="form-control" id="quantidade" placeholder="Digite a quantidade" required />
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-sm-2 col-form-label">Comprimido ou em gotas?</label>
                                                                    <div className="col-sm-10">
                                                                        <input name="comOrGo" type="text" className="form-control" id="comOrGo" placeholder="Digite se é comprimido ou em gotas" required />
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
                                                        {
                                                            requests?.map((request, index) => {

                                                                var s, sc, se
                                                                if (request.status == 1) {
                                                                    s = <button type="button" className="btn btn-outline-primary" style={{ color: "#007bff", borderColor: "#007bff", borderRadius: "20px" }} disabled>Em andamento</button>
                                                                    sc = <button onClick={() => { setShowModalC(true); setID(request.id) }} id="buttonSC" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancelar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal"><span className="ti-trash"></span></button>
                                                                    se = <button onClick={() => { setShowModalE(true); setID(request.id); setMedicament(request.medicament); setQuant(request.quant); setType(request.type); setStatus(request.status) }} id="buttonSE" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px" }} data-toggle="modal"><span className="ti-pencil-alt"></span></button>
                                                                }
                                                                else if (request.status == 2) {
                                                                    s = <button type="button" className="btn btn-outline-success" style={{ color: "#28a745", borderColor: "#28a745", borderRadius: "20px" }} disabled>Concluida</button>
                                                                    sc = <button id="buttonSC" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-trash"></span></button>
                                                                    se = <button id="buttonSE" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px" }} data-toggle="modal" data-target="#editSolicitacaoModal" disabled><span className="ti-pencil-alt"></span></button>
                                                                }
                                                                else {
                                                                    s = <button type="button" className="btn btn-outline-danger" style={{ color: "#dc3545", borderColor: "#dc3545", borderRadius: "20px" }} disabled>Cancelada</button>
                                                                    sc = <button id="buttonSC" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-trash"></span></button>
                                                                    se = <button id="buttonSE" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" data-target="#editSolicitacaoModal" disabled><span className="ti-pencil-alt"></span></button>
                                                                }
                                                                return (

                                                                    <tr key={request.id}>
                                                                        <td>{index += 1}</td>
                                                                        <td>{request.medicament}</td>
                                                                        <td>{request.quant}</td>
                                                                        <td>{request.type}</td>
                                                                        <td>{s}</td>
                                                                        <td>
                                                                            {se}
                                                                            {sc}
                                                                            <button onClick={() => { setShowModalO(true); setID(request.id); setStatus(request.status); }} id="buttonSO" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Ofertas" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal"><span className="ti-receipt"></span></button>
                                                                            <EditButton
                                                                                onClose={() => setShowModalE(false)}
                                                                                show={showModalE}
                                                                            >

                                                                                <div className="modal-header">
                                                                                    <h5 className="modal-title">Editar solicitação</h5>
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    <form onSubmit={editarSoli}>
                                                                                        <div className="form-group row">
                                                                                            <label className="col-sm-3 col-form-label">Medicamento</label>
                                                                                            <div className="col-sm-10">
                                                                                                <input name="medicamento" type="text" className="form-control"
                                                                                                    id="emedicamento" placeholder={medicament} required />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="form-group row">
                                                                                            <label className="col-sm-3 col-form-label">Quantidade</label>
                                                                                            <div className="col-sm-10">
                                                                                                <input type="number" name="quantidade" typeof="text" className="form-control" id="equantidade" placeholder={quant.toString()} required />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="form-group row">
                                                                                            <label className="col-sm-10 col-form-label">Comprimido ou em gotas?</label>
                                                                                            <div className="col-sm-10">
                                                                                                <input name="comOrGo" type="text" className="form-control" id="ecomOrGo" placeholder={type} required />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="form-group row">
                                                                                            <div className="col-sm-10">
                                                                                                <button type="submit" name="EditSoli" id="editSoli" className="btn btn-success" style={{ marginRight: "10px", marginLeft: "5px" }}>
                                                                                                    Editar
                                                                                                </button>
                                                                                                <button className="btn btn-secondary" onClick={() => setShowModalE(false)}>
                                                                                                    Fechar
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </EditButton>
                                                                            <CancelButton
                                                                                onClose={() => setShowModalC(false)}
                                                                                show={showModalC}
                                                                            >
                                                                                <div className="modal-header">
                                                                                    <h5 className="modal-title" id="cancelSolicitacaoLabel">Cancelar solicitação</h5>
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    <h6>Você tem certeza que quer cancelar essa solicitação?</h6>
                                                                                </div> <br />
                                                                                <button className="btn btn-danger" onClick={() => cancelSoli(ID)} style={{ marginRight: "10px", marginLeft: "5px" }}>Sim, quero</button>
                                                                                <button className="btn btn-secondary" onClick={() => setShowModalC(false)}>Fechar</button>
                                                                            </CancelButton>
                                                                            <OffersButton
                                                                                onClose={() => setShowModalO(false)}
                                                                                show={showModalO}
                                                                            >
                                                                                <div className="table-responsive">
                                                                                    <table className="table no-wrap">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th className="border-top-0">Medicamento</th>
                                                                                                <th className="border-top-0">Preço</th>
                                                                                                <th className="border-top-0">Situação</th>
                                                                                                <th className="border-top-0">Ações</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody id='data-offers'>
                                                                                            {
                                                                                                offers?.map(offer => {
                                                                                                    var so, oa, or
                                                                                                    if (offer.id_request == ID) {

                                                                                                        if (offer.status == 1) {
                                                                                                            so = <button type="button" className="btn btn-outline-primary" style={{ color: "#007bff", borderColor: "#007bff", borderRadius: "20px" }} disabled>resposta pendente</button>
                                                                                                            oa = <button onClick={() => { setID(request.id); axios.patch(`http://127.0.0.1:5000/patients/offers/${offer.id}/status`, { "status": 2 }); axios.patch(`http://127.0.0.1:5000/patients/requests/${ID}/status`, { "status": 2 }); Notify.success('Oferta aceita!'); setShowModalO(false); }} id="buttonOA" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Aceitar oferta" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal"><span className="ti-check"></span></button>
                                                                                                            or = <button onClick={() => { setID(request.id); axios.patch(`http://127.0.0.1:5000/patients/offers/${offer.id}/status`, { "status": 3 }); axios.patch(`http://127.0.0.1:5000/patients/requests/${ID}/status`, { "status": 3 }); Notify.failure('Oferta recusada!'); setShowModalO(false); }} id="buttonOR" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Recusar oferta" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal"><span className="ti-close"></span></button>
                                                                                                        } else if (offer.status == 2 || statusR == 2) {
                                                                                                            so = <button type="button" className="btn btn-outline-success" style={{ color: "#28a745", borderColor: "#28a745", borderRadius: "20px" }} disabled>Aceita</button>
                                                                                                            oa = <button id="buttonOA" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancelar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-check"></span></button>
                                                                                                            or = <button id="buttonOR" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancelar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-close"></span></button>
                                                                                                        } else if (offer.status == 3 || statusR == 3) {
                                                                                                            so = <button type="button" className="btn btn-outline-danger" style={{ color: "#dc3545", borderColor: "#dc3545", borderRadius: "20px" }} disabled>Recusada</button>
                                                                                                            oa = <button id="buttonOA" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancelar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-check"></span></button>
                                                                                                            or = <button id="buttonOR" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancelar" style={{ marginLeft: "5px", color: "#fff" }} data-toggle="modal" disabled><span className="ti-close"></span></button>
                                                                                                        }

                                                                                                        return (
                                                                                                            <tr key={offer.id}>
                                                                                                                <td>{offer.medicament}</td>
                                                                                                                <td>{offer.price}</td>
                                                                                                                <td>{so}</td>
                                                                                                                <td>{oa}{or}</td>
                                                                                                            </tr>
                                                                                                        )
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </OffersButton>
                                                                        </td>
                                                                    </tr>
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

export default Solicitations

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

    const { data } = await axios.get(`http://127.0.0.1:5000/patients/${session.token.sub}/requests`);
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
        const URL = `http://127.0.0.1:5000/requests/offers`
        const dataO = await axios.get(URL);
        if (dataO.data.error !== "Invalid") {
            const offers = dataO.data.map((dados: Offers) => {
                return {
                    id: dados.id,
                    medicament: dados.medicament,
                    quant: dados.quant,
                    type: dados.type,
                    price: dados.price,
                    status: dados.status,
                    id_request: dados.id_request
                }
            })
            return {
                props: { session, requests, offers }
            }
        }
        return {
            props: { session, requests }
        }
    } else {
        return {
            props: { session }
        }
    }
}