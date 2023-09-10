import React from 'react'

export const Tarjeta_reviews = ({Nombre,Especialidad,servics}) => {
  return (
    <>
        <div className='reviews__review' >
            <h4 className='review__title' >{Nombre}</h4>
            <span className='review'>
                <img className='review__img' src="./img/doctor.png" alt="Doctor" />
            </span>
            <p className='review__description'>
                {Especialidad}
            </p>
            <div className='review__autor' >
                <div className='autor__container-img' >
                 
                </div>
                <p className='review__description'>
                {servics}
            </p>
            </div>
        </div>
    </>
  )
}


