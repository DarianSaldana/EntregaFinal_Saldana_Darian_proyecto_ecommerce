import { useRef } from 'react';

export const Nosotros = () => {

    const parrafoRef = useRef()

    const scrollear = () => {
        console.log(parrafoRef.current)
        parrafoRef.current.scrollIntoView()//de esta forma hago un scroll hasta la referencia que yo haya declarado
    }

    return (
        <div className="container">
            <br />
            <h5 className='fs-1'>Nosotros </h5>
            <br />
            <button onClick={scrollear} className="btn btn-dark">Scroll Down</button>

            <p className="fs-3" >
                ¡Bienvenido/a a Ruku Home! Somos una empresa dedicada a brindar muebles finos de alta calidad para crear espacios elegantes y sofisticados. Con una pasión por el diseño y la artesanía excepcional, nos enorgullece ofrecer una amplia gama de muebles que combinan estilo, funcionalidad y durabilidad.  </p>
            <p className="fs-3" >
                En Ruku Home, creemos que los muebles no solo son objetos utilitarios, sino que también pueden ser expresiones de individualidad y buen gusto. Cada uno de nuestros muebles es cuidadosamente seleccionado o creado por artesanos expertos, utilizando materiales de primera calidad y técnicas tradicionales que garantizan piezas únicas y exclusivas. </p>
            <p className="fs-3" >
                Nuestro compromiso con la excelencia se refleja en cada detalle de nuestros muebles. Desde la elección de los mejores materiales hasta el meticuloso acabado, nos esforzamos por garantizar que cada pieza que sale de nuestro taller cumpla con los más altos estándares de calidad. Nuestro objetivo es proporcionar a nuestros clientes muebles que no solo sean estéticamente atractivos, sino también funcionales y duraderos.</p>
            <p className="fs-3" >
                Además de ofrecer muebles finos, también nos enorgullece brindar un servicio al cliente excepcional. Nuestro equipo de profesionales capacitados está listo para asesorarte en la elección de los muebles adecuados para tu espacio, así como para resolver cualquier consulta o inquietud que puedas tener. Estamos comprometidos con tu satisfacción total y nos esforzamos por superar tus expectativas en cada interacción.
            </p>
            <p className="fs-3" >
                En Ruku Home, nuestra pasión por los muebles finos se traduce en productos de calidad excepcional y un servicio excepcional. Esperamos que encuentres inspiración en nuestra selección de muebles y que nos permitas ser parte de la creación de tu espacio ideal.
            </p>
            <hr />
            <h4 className='fs-1'>Un poco de Historia</h4>
            <br />
            <p className="fs-3" ref={parrafoRef}>
                Estamos ubicados en Montevideo, la capital de Uruguay. Desde hace 14 años, hemos estado en el mercado de muebles finos, ofreciendo nuestros productos y servicios en esta vibrante ciudad.
            </p>
            <p className="fs-3" >
                Montevideo es conocida por su rica historia, su arquitectura encantadora y su escena cultural diversa. Estar ubicados en esta ciudad nos brinda la oportunidad de estar en contacto con una amplia base de clientes y de inspirarnos en la belleza y la elegancia que la rodea.
            </p>
            <p className="fs-3" >
                Durante estos 14 años, hemos consolidado nuestra presencia en el mercado de muebles finos en Montevideo, convirtiéndonos en una opción confiable y respetada para aquellos que buscan piezas de calidad y estilo para complementar sus espacios. A lo largo de nuestra trayectoria, hemos tenido el privilegio de trabajar con clientes exigentes y apasionados por el diseño interior, creando ambientes únicos y personalizados.
            </p>
            <p className="fs-3" >
                Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido mantenernos firmes en el mercado durante todos estos años. Valoramos la confianza que nuestros clientes depositan en nosotros y nos esforzamos por superar sus expectativas en cada proyecto.
            </p>
            <p className="fs-3" >
                En Montevideo, nuestra ubicación nos brinda la oportunidad de estar cerca de proveedores de materiales de alta calidad y de colaborar con talentosos artesanos locales. Además, nuestra exposición en Montevideo nos permite interactuar directamente con nuestros clientes y proporcionar un servicio personalizado y atento.
            </p>
            <p className="fs-3" >
                Estamos orgullosos de formar parte de la vibrante comunidad de Montevideo y esperamos seguir siendo tu elección preferida para muebles finos de calidad durante muchos años más.
            </p>

        </div >

    )
}

