import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar'
import { getSession } from 'next-auth/react'

const Search: NextPage = () => {
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
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <h4 className="page-title">Resultados da pesquisa para </h4>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12">
                                        <div className="white-box">
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
                </div>
                <hr id="div" className="featurette-divider" />
                <Footer />
            </div>
        </>
    )
}

export default Search

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

    return {
        props: { session }
    }
}