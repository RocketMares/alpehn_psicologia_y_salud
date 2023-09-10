import { Banner, MapasSucursales, Servicios } from "../componentes"
import { Contacto,Especialistas, RedesScociales } from "./"



export const Homepage = () => {
  return (
    <>
      <div className="layaout">
        <Banner/>
        <Servicios/>
        <Especialistas/>
        <Contacto/>
        <MapasSucursales/>
        <RedesScociales />
      </div>

    </>
  )
}


