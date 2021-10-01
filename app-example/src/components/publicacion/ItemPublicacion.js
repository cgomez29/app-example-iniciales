import React from 'react'

export const ItemPublicacion = ({descripcion, fecha}) => {
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{fecha}</h5>
          <p className="card-text">
            {descripcion}
          </p>
        </div>
      </div>
    );
}
