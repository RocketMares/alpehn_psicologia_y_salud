import { NavLink } from "react-router-dom";


export const Banner = () => {
  return (
    <>  
        <section className="layout__banner">
            {/* Contenido del Banner */}
            <div className="banner__content">
                <h1 className="banner__title">Diseño & Desarrollo web</h1>
                <NavLink to={'#'} className={'banner_btn'}>
                    Ver trabajos
                </NavLink>
                
            </div>
            {/* Formas de imagen del banner */}
            <div className="banner__shapes" >
                <ul className="shapes__list">
                    <li className="shapes__item shapes__item--share1">
                        <div className="shapes__container" >
                            <img src="./img/banner-shape-1.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share2">
                        <div className="shapes__container" >
                            <img src="./img/banner-shape-2.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share3">
                        <div className="shapes__container" >
                            <img src="./img/bubble-16.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share4">
                        <div className="shapes__container" >
                            <img src="./img/bubble-15.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share5">
                        <div className="shapes__container" >
                            <img src="./img/bubble-14.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share6">
                        <div className="shapes__container" >
                            <img src="./img/bubble-16.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                    <li className="shapes__item shapes__item--share7">
                        <div className="shapes__container" >
                            <img src="./img/bubble-26.png" className="shapes__img" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        
    </>
  )
}


