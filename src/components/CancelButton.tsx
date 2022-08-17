import axios from 'axios'
import { useState } from 'react'

const cancelSoli = e => {
    e.preventDefault()
    const id = parseInt((document.querySelector("#buttoCancel") as HTMLButtonElement)!.value)
    console.log(id)
    const data = { "status": 3 }
    axios.patch(`http://127.0.0.1:5000/patients/requests/${id}/status`, data).then(response => {
        console.log(response)
    })
}

export default function CancelButton({id}) {

    return (
        <>
            <button id="buttoCancel" value={id} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Excluir" style={{ marginLeft: "5px" }} data-toggle="modal" data-target="#cancelSolicitacaoModal"><span className="ti-trash" style={{ color: "#ffffff" }}></span></button>
            <div className="modal fade" id="cancelSolicitacaoModal" aria-labelledby="excluirSolicitacaoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cancelSolicitacaoLabel">Cancelar solicitação</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>Você tem certeza que quer cancelar essa solicitação?</h6>
                        </div>
                        <form method="PATCH" onSubmit={cancelSoli}>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button id="cancel" name="cancel" type="submit" className="btn btn-primary">Sim, eu quero</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}