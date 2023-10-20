import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Fomulario"
import Error from "../components/Errores"

export async function action({request}) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const errores = []
    if(Object.values(data).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    if(Object.keys(errores).length){
        return errores
    }
}

const NuevoClientes = () => {
    const navigate = useNavigate()
    const errores = useActionData()

    console.log(errores)

    return (
        <>
            <h1 className="font-black text-4xl text-blue-400">Nuevo Clientes</h1>
            <p className='mt-3'>Llena todos los campo para registrar un nuevo cliente</p>
            <div className="flex justify-end mt-5">
                <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate(-1)}
                > Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                {errores && errores.map((error, i) => (
                    <Error
                        key={i}
                    >{error}</Error>
                
                ))}
                <Form
                    method="POST"
                >
                    <Formulario />
                    <input 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5 cursor-pointer"
                        type="submit"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    );
};

export default NuevoClientes;