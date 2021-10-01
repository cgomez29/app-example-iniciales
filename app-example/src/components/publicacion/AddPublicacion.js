import axios from 'axios';
import React, { useState } from 'react'
import { url } from '../../config';

export const AddPublicacion = ({setData}) => {

    const [formPublic, setFormPublic] = useState({
        cui: 5100131754101963,
        id_curso:1,
        id_catedratico:1,
        descripcion:"",
    });

    const handleInputChange = (e) => {
        setFormPublic({
            ...formPublic,
            [e.target.name]: e.target.value 
        })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(`${url}/publicacion`, formPublic).then((res) => {
            setData((data) => [res.data, ...data])
        });
    };

    return (
        <div>
            <h2>ADD Publicacion</h2>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter description"
                        name="descripcion"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
