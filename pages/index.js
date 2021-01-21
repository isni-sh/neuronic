import Layout from '@/layout/Layout'
import Navigation from '@/components/sections/Navigation'
import Header from '@/components/sections/Header'
import Main from '@/components/sections/Main'
import useSticky from '@/components/useSticky'
export default function Home() {
  const { isSticky } = useSticky()

  return (
    <Layout title="Home">
      <Navigation sticky={isSticky} />
      <Header />
      <Main />
    </Layout>
  )
}

export function getStaticProps() {
  return {
    props: {},
  }
}
