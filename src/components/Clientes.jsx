

function Clientes ({cliente}) {
    const { nombre, empresa, email, telefono, id } = cliente;
    return (
        <tr> {/*the 'tr' tag is a table row*/}
            <td className="p-6">{/*the 'td' is table col */}
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-800"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-800"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    type="button"
                >Editar</button>
                <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Clientes;