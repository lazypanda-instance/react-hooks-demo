import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Next js React hooks explanation</title>
      </Head>
      <Container>
        <h1>Demo</h1>
      </Container>
    </Layout>
  )
}

export default Home
