import { Banner, Servicios } from "../componentes"
import { Contacto,Especialistas, RedesScociales } from "./"



export const Homepage = () => {
  return (
    <>
      <div className="layaout">
        <Banner/>
        <Servicios/>
        <Especialistas/>
        <Contacto/>
        <RedesScociales />
      </div>

    </>
  )
}


