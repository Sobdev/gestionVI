import { Hero } from '../components/HeroHome';

export const FeaturesExplained = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <Hero
                titleColored='Nuestros servicios'
                subtitle='Conoce más sobre lo que hacemos'
                showBackground={false} />
        </div>
    )
}