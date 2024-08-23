import { Hero } from '../components/HeroHome';

export const FeaturesExplained = () => {
    return (
        <section className="relative">
            <div className='flex flex-col min-h-screen overflow-hidden'>
                <Hero
                    titleColored='Nuestros servicios'
                    subtitle='Conoce más sobre lo que hacemos'
                    showBackground={false}
                    showButton={false}
                />
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
                    <p className="text-xl mb-4">Bajas temporales.</p>
                    <p className="text-xl mb-4">Transferencias: cambios de titularidad. </p>
                    <p className="text-xl mb-4">Bajas exportación o tránsito comunitario.</p>
                    <p className="text-xl mb-4">Matriculaciones vehículos nacionales y de importacion.</p>
                    <p className="text-xl mb-4">Modelo 620: tramitación impuesto de transmisiones.</p>
                    <p className="text-xl mb-4">Permisos especiales de circulación con y sin itinerario.</p>
                    <p className="text-xl mb-4">Altas y renovaciones de tacógrafo digital para empresas y conductores.</p>
                    <p className="text-xl mb-4">Gestiones relativas a autorizaciónes de transportes altas, rehabilitaciones, sustiruciones, visados.</p>
                </div>
            </div>
        </section>
    )
}