import { observer } from 'mobx-react';
import * as React from 'react';
import AboutSection from './components/AboutSection';
import FeaturedServicesSection from './components/FeaturedServicesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopBar from './components/TopBar';
import CountsSection from './components/CountsSection';
import ClientsSection from './components/ClientsSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import FrequentlyAskedQuestionsSection from './components/FrequentlyAskedQuestionsSection';
import PrincingSection from './components/PrincingSection';
import TeamSection from './components/TeamSection';

export function AppComp() {
  return (
    <>
      <React.Suspense fallback={null}>
        <TopBar />
        <Header />
        <HeroSection />
        <main id="main">
          <FeaturedServicesSection />
          <AboutSection />
          <CountsSection />
          <ClientsSection />
          <ServiceSection />
          <TestimonialSection />
          <PortfolioSection />
          <TeamSection />
          <PrincingSection />
          <FrequentlyAskedQuestionsSection />
          <ContactSection />
        </main>
        <Footer />
      </React.Suspense>
    </>
  );
}

export const App = observer(AppComp);
