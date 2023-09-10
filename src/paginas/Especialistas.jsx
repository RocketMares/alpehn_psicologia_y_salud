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
                    Nuestro personal cuenta experiencia de vanguardia y de alta de manda en su campo 
                </p>
            </header>
           {
            datos.map(dato =>{
                return(
                    <Tarjeta_reviews key={dato.id} Nombre={dato.nombreEspecialista} Especialidad ={dato.Especialidad} servics = {dato.Corriente} />
                )
            })
           }
        </div>
    </section>
      
    </>
  )
}


