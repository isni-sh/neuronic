import Navigation from '@/components/sections/Navigation'
import AboutHeader from '@/components/sections/AboutHeader'
import AboutMain from '@/components/sections/AboutMain'
import Layout from '@/components/layout/Layout'
import useSticky from '@/components/useSticky'

export default function Home() {
  const { isSticky } = useSticky()

  return (
    <Layout title="About">
      <Navigation sticky={isSticky} />
      {/* About Header */}
      <AboutHeader />
      <AboutMain />
    </Layout>
  )
}
