import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import { useSession, getSession } from 'next-auth/react'
import axios from 'axios'

type Request = {
    medicament: string,
    quant: int,
    type: string,
    status: int,
    ID_patient: string
}

type DashboardProps = {
    requests: Request[]
}

const Dashboard: NextPage<DashboardProps> = ({ requests }: DashboardProps) => {
    
    const { data: session, status} = useSession()

    if(status === 'authenticated'){
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
                                                <tbody id='data-requests'>
                                                    {/* {requests.map(patient => {
                                                        return (
                                                            <tr key={patient.id}>
                                                                <td>{patient.name}</td>
                                                                <td>{patient.email}</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        )
                                                    })} */}
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

// export async function getServerSideProps() {
//     const {data} = await axios.get("http://127.0.0.1:5000/patients/1/requests");
    
//     if(data != data['error']){
//         const requests = data.map((dados: Request) => {
//             return {
//                 medicament: dados.medicament,
//                 quant: dados.quant,
//                 type: dados.type,
//                 status: dados.status
//             }
//         })
//         return {
//             props: {
//                 requests
//             }
//         };
//     }
//     else
//         return ''
// }

// function cadastrarSoli(event) {
//     event.preventDefault();
//     const medicament = this.medicamento.value;
//     const quant = this.quantidade.value;
//     const type = this.conOrGO.value
//     const status = "1"
//     const ID_patient = "1"
//     const URL = `http://127.0.0.1:5000/patients/${ID_patient}/requests`;

//     const rqt = { "medicament": medicament, "quant": quant, "type": type, "status": status, "ID_patient": ID_patient }
//     axios.post(URL, rqt).then(function (resposta) {
//         console.log(resposta.data);
        
//     });
//     const form = document.getElementById('insert_form')
//     form?.addEventListener('submit',cadastrarSoli)
// }

export default Dashboard

export const getServerSideProps = async (context) =>{
    const session = await getSession(context);
    if(!session){
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        };
    };

    return { 
        props: { session }
    }
}