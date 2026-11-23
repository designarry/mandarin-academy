import SiteLayout from '../../components/site-layout'
import {
  AboutSection,
  CtaBanner,
  HomeHero,
  LocationSection,
  OnlineClassesSection,
  ProgramsSection,
  ReasonsSection,
  SchedulesSection,
  Statistics,
  TeachersSection,
  TestimonialsSection,
  WhyUsSection,
} from '../../components/sections'

function Home() {
  return (
    <SiteLayout>
      <HomeHero />
      <Statistics />
      <AboutSection />
      <WhyUsSection />
      <ReasonsSection />
      <ProgramsSection />
      <OnlineClassesSection />
      <SchedulesSection />
      <TeachersSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaBanner />
    </SiteLayout>
  )
}

export default Home
