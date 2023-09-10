import { Link } from "react-router-dom"
import { GetServicios } from "../helpers"


export const RedesScociales = () => {
    const datos = GetServicios();

  return (
    <> 
        <footer className='layout__footer'>
                <div className='footer__container'>
                    <section className='footer__top' >
                            <ul className='footer__social'>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://www.facebook.com/alphenutricion?mibextid=ZbWKwL'} >
                                        <i className="fa-brands fa-facebook-f social__img" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://www.facebook.com/Alphenpsicologiaysalud?mibextid=ZbWKwL'} >
                                        <i className="fa-brands fa-facebook-f social__img" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://wa.me/525636225299'} >
                                        <i className="fa-brands fa-whatsapp" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://wa.me/5256221409456'} >
                                        <i className="fa-brands fa-whatsapp" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://instagram.com/alphen_psicologiaysalud?igshid=MzRlODBiNWFlZA=='} >
                                        <i className="fa-brands fa-instagram" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://instagram.com/alphen_nutricion?igshid=MzRlODBiNWFlZA=='} >
                                        <i className="fa-brands fa-instagram" ></i>
                                    </Link>
                                </li>
                                <li className='social__item' >
                                    <Link className="social__link" to={'https://www.tiktok.com/@alphen_psicologiaysalud?_t=8fYb4VVSjZe&_r=1'} >
                                        <i className="fa-brands fa-tiktok" ></i>
                                    </Link>
                                </li>
                            </ul>
                    </section>
                    <section className='footer__main' >
                        <div className="footer__fleft">
                            <div className="fleft__container">
                                <h2 className="fleft__title" >Contactanos</h2>
                                <p className="fleft__subtitle" >
                                    Recuerda que nuestros servicios son especializados,<br />
                                    por ello te garantizamos discrecion con tus datos personales
                                </p>
                                <form className="fleft__form" >
                                    <div className="fleft__group">
                                        <span className="fleft__mail-icon" >
                                        <i className=" fa-solid fa-envelope-open-text fleft__img" ></i>
                                        </span>
                                        <input type="text" className="fleft__form-control" placeholder="Correo electronico" />
                                        <button type="submit" className="fleft__btn" >Suscribete</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer__right">
                                <div className="footer__widget">
                                    <h6 className="widget__title">Servicios</h6>
                                    <ul className="widget__list">
                                        {
                                            datos.map(data=>{
                                                return(
                                                    <li className="widget__item" >
                                                        <Link to={'#'} className="widget__link" >
                                                                {data.Nombre_servicio}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    
                                    </ul>
                                </div>
                        </div>
                    </section>
                    <section className='footer__bottom' >
                            <div className="footer__copyright">
                                <span className="copyright__text" >
                                    &copy; 2023 Todos los derechos reservados a <Link to={'https://github.com/RocketMares'}>RocketMares</Link>
                                </span>

                            </div>
                            <div className="footer__links">
                                <ul className="footer__flinks">
                                    <li className="flinks__item flinks__item--separator">
                                        <Link to={'#'} className="flinks__title" >Politicas de Privacidad</Link>
                                    </li>
                                    <li className="flinks__item flinks__item">
                                        <Link to={'#'} className="flinks__title" >Terminos de uso</Link>
                                    </li>
                                </ul>

                            </div>
                    </section>

                </div>
        </footer>
      
    </>
  )
}

