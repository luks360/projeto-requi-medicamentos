import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import { getSession } from 'next-auth/react'

const Profile: NextPage = () => {
    return (
        <>
            <div className='body'>
                <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                    <Header />
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xlg-9 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <form className="form-horizontal form-material">
                                                <div className="form-group mb-4">
                                                    <label className="col-md-12 p-0">Nome</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Lucas dos Santos"
                                                                className="form-control p-0 border-0" />
                                                    </div>
                                                    <label className="col-md-12 p-0">Email</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <input type="text" placeholder="lucas@gmail.com"
                                                            className="form-control p-0 border-0" />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label className="col-md-12 p-0">Telefone</label>
                                                        <div className="col-md-12 border-bottom p-0">
                                                            <input type="text" placeholder="123 456 7890"
                                                                className="form-control p-0 border-0" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="col-sm-12">
                                                            <button className="btn btn-success">Salvar alterações</button>
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

export default Profile

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