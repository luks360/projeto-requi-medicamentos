import type { NextPage } from 'next'
import Image from 'next/image'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

type Patient = {
    id: string,
    name: string,
    email: string
}

type ProfileProps = {
    patient: Patient
}

const Profile: NextPage<ProfileProps> = ({ patient }: ProfileProps) => {
    const { data: session, status } = useSession()

    const alterName = e => {
        e.preventDefault()
        const name = e.target.name.value
        const data = {"name":name, "email":session.session.user.email}
        const id = session.token.sub
        axios.put(`http://127.0.0.1:5000/patients/${id}`,data).then(() => {
            Notify.success("Nome alterado!")
        })
    }

    if (status === 'authenticated') {
        return (
            <>
                <div className='body'>
                    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                        <Header patient={patient.name}/>
                        <Sidebar />
                        <div className="page-wrapper">
                            <div className="page-breadcrumb bg-white">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                        <h4 className="page-title">Perfil</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-xlg-3 col-md-12">
                                        <div className="white-box">
                                            <div className="user-bg">
                                                <div className="overlay-box">
                                                    <div className="user-content">
                                                        <Image src={session.session.user.image} width="100px" height="100px" style={{ borderRadius: "50%" }}></Image><br />
                                                                    <h4 style={{ color: "#fff" }}>
                                                                        {patient.name.split(" ")[0]}
                                                                    </h4><br />
                                                        <h4 style={{ color: "#fff" }}>{session.session.user.email}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-xlg-9 col-md-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <form className="form-horizontal form-material" onSubmit={alterName}>
                                                    <div className="form-group mb-4">
                                                        <label className="col-md-12 p-0">Nome</label>
                                                        <div className="col-md-12 border-bottom p-0">
                                                            <input id="name" type="text" placeholder={`${patient.name}`}
                                                                className="form-control p-0 border-0" required/>
                                                        </div>
                                                        <div className="form-group mb-4" style={{paddingTop: "10px"}}>
                                                            <div className="col-sm-12">
                                                                <button type="submit" className="btn btn-success">Salvar alterações</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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

export default Profile

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
    const { data } = await axios.get(`http://127.0.0.1:5000/patients/${session.token.sub}`)
    if (data.error != "No patients found") {
        const patient = data
        return {
            props: { session, patient }
        }
    }
    return {
        props: { session }
    }
}