import SiteLayout from '../../components/site-layout'
import { CtaBanner, OnlineClassesSection, ProgramsSection } from '../../components/sections'

function Program() {
  return (
    <SiteLayout>
      <ProgramsSection muted={false} />
      <OnlineClassesSection />
      <CtaBanner />
    </SiteLayout>
  )
}

export default Program
