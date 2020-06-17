import React, { useState, useEffect } from 'react';
import { Tabela } from './'
import { Paper } from '@material-ui/core';
import api from '../service/api'
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton'

const StatesPanelLarge = () => {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const emptyState = () => {
        let array = []
        for (let i = 0; i < 5; i++) {
            array.push({ state: '', cases: '', deaths: '' },)
        }
        return array
    }
    const emptyColumns = [
        { title: 'Estado', field: 'state', render: rowData => <Skeleton /> },
        { title: 'Casos Confirmados', field: 'cases', render: rowData => <Skeleton /> },
        { title: 'Mortes', field: 'deaths', render: rowData => <Skeleton /> },
    ]
    const colunas = [
        { title: 'Estado', field: 'state', render: rowData => <Link to={"/estados/" + rowData.uf}>{rowData.state}</Link> },
        { title: 'Casos Confirmados', field: 'cases' },
        { title: 'Mortes', field: 'deaths' },
    ]
    useEffect(() => {
        const fetchStates = async () => {
            const response = await api.get('/')
            const {data} = response.data
            setData(data)
            setLoaded(true)
            console.log(data)
        }
        fetchStates()
    }, [])
    return (
        <div>
            <Paper elevation={3}>
                {loaded ? (
                    <Tabela data={data} columns={colunas} title="Estados Afetados" />
                ) : (
                        <Tabela data={emptyState()} columns={emptyColumns} title="Estados Afetados" />
                    )
                }
            </Paper>
        </div>
    );
};

export default StatesPanelLarge;