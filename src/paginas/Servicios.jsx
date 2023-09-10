import { GetServicios } from "../helpers";
import {Articulos} from '../componentes';

export const Servicios = () => {

  const data = GetServicios();

  return (
    <>
      <section className="layout__services">
          <div className="services__header">
            <p className="services__subtitle" >¿Que podemos hacer por ti?</p>
            <h2>Servicios que te <br /> pueden ayudar</h2>
          </div>
          <div className="services__list">
              { 
                data.map(datos=>{
                  return(
                    <Articulos key={datos.id} id={datos.idServicio} Nombre_servicio = {datos.Nombre_servicio} Atenciones = {datos.Atenciones} />
                  )
                })
              }
           
          </div>

      </section>
    </>
  )
}


