import { useState } from "react";
import { data } from "./data";

export function ProdutoData(){
    const [search, setSearch] = useState(''); // console.log(search);
    return(
        <>
            <h1>Produtos</h1>

            <input 
                type="text"
                value={search} 
                className="form-control"
                onChange={ e => setSearch(e.target.value)} 
            />

            <table className="table table-spriped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>sexo</th>
                        <th>cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((item) => {
                            return search.toLowerCase() === ''
                            ? item
                            : item.nome.toLowerCase()
                            .includes(search)
                        })
                        .map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.sexo}</td>
                                <td>{item.cidade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}