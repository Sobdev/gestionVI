import { Hero } from '../components/HeroHome';

export const FeaturesExplained = () => {
    return (
        <Section className="relative">
            <div className='flex flex-col min-h-screen overflow-hidden'>
                <Hero
                    titleColored='Nuestros servicios'
                    subtitle='Conoce más sobre lo que hacemos'
                    showBackground={false} />
            </div>
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Nuestro proceso es fácil y eficiente</h2>
                <p className="text-xl text-gray-600">Deja tus trámites en nuestras manos y disfruta de una gestión sin complicaciones</p>
            </div>
        </Section>
    )
}
