import NextAuth from "next-auth";
import axios from 'axios'
import GoogleProvider from "next-auth/providers/google"

const getPatients = async () => {
    return await axios.get("http://localhost:5000/patients")
};

async function addPatient(session) {

    const { data } = getPatients()
        
    var e = 0
    if(data != undefined){
        const patients = data.map(patient => {
            return {
                id: patient.id,
            }
        })

        for (var i = 0; i < patients.length; i++) {
            if (patients[i].id == session.token.sub) {
                e = 1
                break
            }
        }
    }
    if (e == 0) {
        const p = { "id": session.token.sub, "name": session.token.name, "email": session.token.email }
        axios.post("http://localhost:5000/patients", p)
    }
}

export default NextAuth({
    // Configurar um ou mais provedores de autenticação
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        session: async (session) => {
            // session.name = user.name;
            addPatient(session)
            return Promise.resolve(session);
        },
    },
});