
import {  NavLink } from "react-router-dom";


export const Menu = () => {
  return (
    <>
    {/* Menu */}
    <div className="layout">
    <section className="layout__menu">
            <div className="menu__navbar">
              {/* Logo */}
              <div className="navbar__logo" >
                  <NavLink to={"#"} className="navbar__link-logo"  >
                      <img src="./img/logo1.png" alt="" className="navbar__logo-ligth" />
                  </NavLink>
              </div>
              {/* Navegación */}
              <nav className="navbar__nav">
                  <ul className="nav__list">
                    <li className="nav__item">
                    <NavLink className="nav__title" to={'/home'}>
                        Inicio
                    </NavLink>
                    </li>
                    <li className="nav__item">
                    <NavLink className="nav__title">
                        Servicios
                        <i className="fa-solid fa-chevron-down nav__icon" ></i>
                    </NavLink>
                      <ul className="nav__submenu" >
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Diseño web
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Desarrollo de Apps
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Programación
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Consultoria
                            </NavLink>
                          </li>
                      </ul>
                    </li>
                    <li className="nav__item">
                    <NavLink className="nav__title" to={'/home'}>
                        Portafolio
                        <i className="fa-solid fa-chevron-down nav__icon" ></i>
                    </NavLink>
                    <ul className="nav__submenu" >
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Diseño web
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Desarrollo de Apps
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Programación
                            </NavLink>
                          </li>
                          <li className="submenu__item">
                            <NavLink to={'#'}>
                                  Consultoria
                            </NavLink>
                          </li>
                      </ul>
                    </li>
                    <li className="nav__item">
                    <NavLink className="nav__title" to={'/home'}>
                        Blog
                    </NavLink>
                    </li>
                    <li className="nav__item">
                    <NavLink className="nav__title" to={'/home'}>
                        Equipo
                    </NavLink>
                    </li>
                    <li className="nav__item">
                    <NavLink className="nav__title" to={'/home'}>
                        Contacto
                    </NavLink>
                    </li>

                  </ul>
              </nav>
            </div>

      </section>


{/* Baner */}

{/* Servicios */}

{/* Proyecto */}

{/* Estadisticas */}

{/* Reseñas */}

{/* Clientes */}

{/* Noticias */}

{/* Concatos */}

{/* Footer */}
</div>

    </>
  )
}


