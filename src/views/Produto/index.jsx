import { useState, useEffect } from 'react'

export function Produto(){
    // 1. carrega a url base de dados
    const url = 'http://jsonplaceholder.typicode.com/users' 

    // 2. guarda os dados da url
    const [ users, setUsers] = useState([])
    
    // 3. pega o valor do input a filtrar
    const [ inputValue, setInputValue] = useState('')  

    // 4. carrega os dados sem filtro
    const showUsers = async () => { 
      const response = await fetch(url)
      const data = await response.json()
      setUsers(data)
    }
  
    // 5. carrega os dados com filtro
    const filterUserName = !inputValue ? users : users.filter(
        item => item.name.toLowerCase().includes( inputValue.toLocaleLowerCase() )
    )

    // 6. Exibi o valor filtradado
    useEffect(() => {
      showUsers()
    }, [])

    return(
        <>
            <h1>Filtro com ReactJS</h1>
            <form>
                <div className="row">
                    <div className="col">
                        <input 
                            placeholder='Buscar digite palavra chave' className='form-control'
                            type="text" value={inputValue} onChange={ e => setInputValue(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            placeholder='Buscar digite palavra chave' className='form-control'
                            type="text" value={inputValue} onChange={ e => setInputValue(e.target.value)}
                        />
                    </div>
                </div>
            </form>

            <table className='table table-striped table-hover mt-3 shadow-lg'>
                <thead>
                    <tr className='bg-primary text-white'>
                        <th>Nome</th>
                        <th>Sobre nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    { filterUserName.map( (user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td className="text-right">{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>                   
                    ))}
                </tbody>
            </table>
        </>
    )
}