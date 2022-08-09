import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getSession } from 'next-auth/react'

const Home: NextPage = () => {
    return (
    <>
        <div className="body">
            <Header />
            <main>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                    <>
                        <div className="carousel-item active">
                            <img id="farmimg" className="bd-placeholder-img" width="100%" height="100%" src="img/farmacia.png"
                                aria-hidden="true" />

                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h1>Quem somos</h1>
                                        <p>A FRM procura ajudar a resolver suas demandas de medicamentos rapidamente.</p>
                                        <div><a className="btn btn-lg btn-primary" href="#quemsomos">Saiba mais</a></div>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img id="medimg" className="bd-placeholder-img" width="100%" height="100%" src="img/medicamentos.jpg"
                                aria-hidden="true" />

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1>Precisa de medicamentos?</h1>
                                        <p>Você veio ao lugar certo, faça já seu cadastro!</p>
                                        <div><a className="btn btn-lg btn-primary" href="#paraclientes">Saiba mais</a></div>
                                    </div>
                                </div>
                        </div>
                    </>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="information">
                    <h2 className="featurette-heading information" >Informações</h2>
                </div>
                <div className="container marketing">
                    <div className="row featurette" id="quemsomos">
                        <div className="col-md-7">
                            <h2 className="featurette-heading ">O que é a FRM? <span className="text-muted"> Um pouco sobre
                                nós.</span></h2>
                            <p className="lead">A FRM é um projeto de sistema que visá melhorar a requisição de medicamentos, para dessa forma aqueles que usarem este sistema tenham a maior praticidade possivel.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400"
                                height="400" src="img/logoG.png" role="img" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette" id="paraclientes">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">O que eu como cliente posso fazer? <span className="text-muted">Simples, tenha suas necessidades atendidas!</span></h2>
                            <p className="lead">Obviamente você primeiro terá que ter um cadastro no sistema, e depois disso você poderá: </p><br />
                            <li className="lead">Fazer requisições de medicamentos rapidamente;</li>
                            <li className="lead">Escolher aceitar a oferta recebida ou não.</li>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="img/clients.png" width="350"
                                height="350" role="img" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                </div>

                <Footer />
            </main>
        </div>
    </>
    )
}

export default Home

export const getServerSideProps = async (context) =>{
    const session = await getSession(context);
    
    
    if(session){
        return {
            redirect:{
                destination: '/dashboard',
                permanent: false
            }
        };
    };

    return { 
        props: { session }
    }
}
