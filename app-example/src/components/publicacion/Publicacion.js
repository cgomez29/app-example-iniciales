import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../config'
import { AddPublicacion } from './AddPublicacion'
import { ItemPublicacion } from './ItemPublicacion'

import './publicacion.css'

export const Publicacion = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${url}/publicacion`).then((res) => {
            setData(res.data)
        });
    }, []);

    return (
        <div>
            <h1>Publicacion</h1>
            <hr/>
            <AddPublicacion setData={setData}/>
            {
                data.map(({id_post, descripcion, fecha}) => (
                    <ItemPublicacion 
                        key={id_post} 
                        descripcion={descripcion} 
                        fecha={fecha}
                    />
                ))

            }
        </div>
    )
}
