import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
    return (
        <>
            <Hero />
            <NavBar />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
        </>
    );
}
