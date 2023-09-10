import { Link } from "react-router-dom"


export const Contacto = () => {
  return (
    <>
    <section className="layout__contact">
            <div className="contact__container">
                <header className="contact__header">
                    <h4 className="contact__subtitle">
                        Trabajamos juntos
                    </h4>
                    <h2 className="contact__title" >¿Comenzamos con tu tratamiento?</h2>
                    <Link className={'contact__btn'} to={'#'}>
                            Solicitar cita
                    </Link>
                </header>
                <div className="contact__images" >
                    <div className="contact__thumb">
                        <img className="contact__img" src="./img/chat-group.png" alt="" />
                    </div>
                    <div className="contact__thumb contact__thumb--laptop">
                        <img className="contact__img" src="./img/laptop-poses.png" alt="" />
                    </div>
                    <div className="contact__thumb contact__thumb--mobile">
                        <img className="contact__img" src="./img/men-mobile.png" alt="" />
                    </div>
                </div>
                
            </div>
        <ul className="contact__backshapes">
            <li className="new-shapes__item new-shaès--shape1">
              
                    <img className="contact__backshapes" src="./img/bubble-12.png" />
           
            </li>
            <li className="new-shapes__item new-shaès--shape2">
      
                    <img className="contact__backshapes" src="./img/bubble-16.png" />
              
            </li>
            <li className="new-shapes__item new-shaès--shape3">
                    <img className="contact__backshapes" src="./img/bubble-13.png" />
         
                
            </li>
            <li className="new-shapes__item new-shaès--shape4">
                <img className="contact__backshapes" src="./img/bubble-14.png" />
            </li>
            <li className="new-shapes__item new-shaès--shape5">
                <img className="contact__backshapes" src="./img/bubble-16.png" />
            </li>
            <li className="new-shapes__item new-shaès--shape6">
                <img className="contact__backshapes" src="./img/bubble-15.png" />
            </li>
            <li className="new-shapes__item new-shaès--shape7">
                <img className="contact__backshapes" src="./img/bubble-16.png" />
            </li>
        </ul>


    </section>
      
    </>
  )
}


