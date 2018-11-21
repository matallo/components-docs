import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'
import styled from 'styled-components';

import Nav from '../components/Nav'
import SidebarWrapper from '../components/SidebarWrapper'
import { H3 } from '../src/Headings'

import * as assets from '../pages/assets'

const getLink = router => {
  return Object.values(assets).map(({displayName: name}) => {
    const isSelected = router.pathname === `/assets/${name}`

    return (
      <li key={name}>
        <Link href={`/assets/${name}`}>
          <a className={`Nav__Link ${isSelected ? 'active' : null}`}>{name}</a>
        </Link>
      </li>
    )
  })
}

class AssetsSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <SidebarWrapper>
        <div className="Sidebar__Fixed">
          <div className="Sidebar__Header">
            <H3 as="h3">Assets</H3>
          </div>

          <div className="Sidebar__Inner">
            <Nav>
              {getLink(router)}
            </Nav>
          </div>
        </div>
      </SidebarWrapper>
    )
  }
}

export default withRouter(AssetsSidebar)
