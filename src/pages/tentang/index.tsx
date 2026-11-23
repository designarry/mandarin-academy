import SiteLayout from '../../components/site-layout'
import { AboutSection, CtaBanner, TentangHero, WhyUsSection } from '../../components/sections'

function Tentang() {
  return (
    <SiteLayout>
      <TentangHero />
      <AboutSection withButton={false} />
      <WhyUsSection />
      <CtaBanner />
    </SiteLayout>
  )
}

export default Tentang
