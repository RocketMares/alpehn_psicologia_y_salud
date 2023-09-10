import { Tarjeta_reviews } from "../componentes";
import { GetEspecialistas } from "../helpers"



export const Especialistas = () => {
    const datos = GetEspecialistas();
  return (
    <>
    <section className="layout__reviews">
        <div className="reviews__grid">
            <header className="reviews__header">
                <h4 className="reviews__subtitle">
                    Especialistas
                </h4>
                <h2 className="reviews__title">¿Quiénes son?</h2>
                 <p className="reviews__description" >
                 Somos jóvenes Profesionistas enfocados en los servicios de salud que buscan brindar a otros humanos calidez, empatía, y confianza, brindando un servicio de calidad y eficaz adaptándonos a las necesidades de nuestros clientes por medio de un trato personalizado. Comprendemos que “cada cabeza es un mundo” por lo que, no podremos invadir tu mundo, pero si hacer una transformación para una mejor calidad de vida. 
                </p>
            </header>
            <div className="reviews__grid-container" >
            {
            datos.map(dato =>{
                return(
                    <Tarjeta_reviews key={dato.id} Nombre={dato.nombreEspecialista} Especialidad ={dato.Especialidad} servics = {dato.Corriente} />
                )
            })
           }
            </div>
        
        </div>
    </section>
      
    </>
  )
}


