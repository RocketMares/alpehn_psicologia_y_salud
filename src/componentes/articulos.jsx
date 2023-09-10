

export const Articulos = ({idServicio,Nombre_servicio,Atenciones}) => {



  return (
    <>
    <article className="services__service services__service--button">
        <div className="service__container-img" >
           
            <img className="service__img" src="./img/icon-1.png" alt="diseño" />

        </div>
        <div>
            <h3 className="service__title" >
                  {Nombre_servicio}
            </h3>
            <ul>
              {Atenciones.map(aten =>{
                return(
                  <li><p>{aten}</p></li>
                )
              })}
            </ul>
        </div>
    </article>
    </>
  )
}


