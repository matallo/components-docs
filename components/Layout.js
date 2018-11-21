import React, { Component } from 'react';
import {withRouter} from 'next/router'
import getConfig from 'next/config'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import Link from 'next/link'
import Logo from '../static/img/logo_full_inverse.svg'

import * as starters from '../pages/getting-started'
import * as foundations from '../pages/foundations'
import * as components from '../pages/components'
import * as assets from '../pages/assets'
import * as docComponents from '../components'
import * as twComponents from '../src'

const pages = {
  ...starters,
  ...foundations,
  ...components,
  ...assets
}

const {theme} = twComponents
const {BaseStyles, Content, Header, MarkdownStyles, Nav, PageLayout, Sidebar, FoundationsSidebar, ComponentsSidebar, AssetsSidebar, GitHubLink} = docComponents

const {pageMap} = getConfig().publicRuntimeConfig

const editBaseURL = `https://github.com/transferwise/components-docs/edit/master/pages`

const Layout = ({ children, router }) => {
  const {pathname} = router
  const filename = pageMap[pathname]
  if (!filename) {
    // eslint-disable-next-line no-console
    console.warn(`pathname "${pathname}" doesn't exist in pageMap:`, pageMap)
  }
  const isIndex = pathname === '/'

  const getPage = componentName => {
    return Object.values(pages)
      .find(n => n.displayName === componentName)
  }

  const starter = getPage(pathname.replace('/getting-started/', ''))
  const foundation = getPage(pathname.replace('/foundations/', ''))
  const component = getPage(pathname.replace('/components/', ''))
  const asset = getPage(pathname.replace('/assets/', ''))
  const isBrand = pathname === '/brand'
  const isCopy = pathname === '/copy'

  return (
    <ThemeProvider theme={theme}>
      <>
        <BaseStyles />
        <MarkdownStyles />

        <PageLayout>
          <Header as="header">
            <div className="Header__Fixed">
              <Link href="/">
                <a className="Logos"><Logo /></a>
              </Link>

              <div className="Header__Inner">
                <Nav dark>
                  <li>
                    <Link href="/getting-started/Designers">
                      <a className={`Nav__Link ${(isIndex || starter) ? 'active' : null}`}>Getting started</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/foundations/Colours">
                      <a className={`Nav__Link ${foundation ? 'active' : null}`}>Foundations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/Alerts">
                      <a className={`Nav__Link ${component ? 'active' : null}`}>Components</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/assets/Flags">
                      <a className={`Nav__Link ${asset ? 'active' : null}`}>Assets</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/brand">
                      <a className={`Nav__Link ${isBrand ? 'active' : null}`}>Brand</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/copy">
                      <a className={`Nav__Link ${isCopy ? 'active' : null}`}>Copy</a>
                    </Link>
                  </li>
                </Nav>
              </div>
            </div>
          </Header>

          {(isIndex || starter || foundation || component || asset) && (
            <div className="PageLayout__Inner">
              {(isIndex || starter) && (
                <Sidebar />
              )}

              {foundation && (
                <FoundationsSidebar />
              )}

              {component && (
                <ComponentsSidebar />
              )}

              {asset && (
                <AssetsSidebar />
              )}

              <Content className="markdown-body">
                <div className="Content__Inner">
                  {children}
                </div>

                {asset && asset.abstractURL && (
                  <p>
                    <a href={`${asset.abstractURL}`}>See this asset in Abstract</a>
                  </p>
                )}

                {foundation && foundation.abstractURL && (
                  <p>
                    <a href={`${foundation.abstractURL}`}>See this foundation in Abstract</a>
                  </p>
                )}

                {component && component.abstractURL && (
                  <p>
                    <a href={`${component.abstractURL}`}>See this component in Abstract</a>
                  </p>
                )}

                {filename && (
                  <GitHubLink url={`${editBaseURL}${filename}`} />
                )}
              </Content>
            </div>
          )}
          {(isBrand || isCopy) && (
            <div className="PageLayout__Inner PageLayout__Inner--nosidebar">
              <Content className="markdown-body">
                <div className="Content__Inner">
                  {children}
                </div>

                {filename && (
                  <GitHubLink url={`${editBaseURL}${filename}`} />
                )}
              </Content>
            </div>
          )}
        </PageLayout>
      </>
    </ThemeProvider>
  )
}

export default withRouter(Layout)
