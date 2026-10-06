import React from 'react'

const Statistics = ({ stats }) => {
    return (
        <div>
            <h3>Estatísticas</h3>
            <div>
                <div>
                    <div>Total: {stats?.total}</div>
                </div>
                <div>
                    <div>Com Email: {stats?.comEmail}</div>
                </div>
                <div>
                    <div>Com Telefone: {stats?.comTelefone}</div>
                </div>
                <div>
                    <div>Sem Email: {stats?.semEmail}</div>
                </div>
                <div>
                    <div>Sem Telefone: {stats?.semTelefone}</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics