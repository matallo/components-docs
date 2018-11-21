import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }
  }

  render () {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <Head>
          <title>TransferWise Components</title>
          {router.pathname === '/components/Modal' && (
            <link href="https://bootstrap.transferwise.com/dist/css/bootstrap.min.css" rel="stylesheet" />
          )}
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
