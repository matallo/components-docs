import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'
import styled from 'styled-components';

import Nav from '../components/Nav'
import SidebarWrapper from '../components/SidebarWrapper'
import { H3 } from '../src/Headings'

import * as foundations from '../pages/foundations'

const getLink = router => {
  return Object.values(foundations).map(({displayName: name}) => {
    const isSelected = router.pathname === `/foundations/${name}`

    return (
      <li key={name}>
        <Link href={`/foundations/${name}`}>
          <a className={`Nav__Link ${isSelected ? 'active' : null}`}>{name}</a>
        </Link>
      </li>
    )
  })
}

class FoundationsSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <SidebarWrapper>
        <div className="Sidebar__Fixed">
          <div className="Sidebar__Header">
            <H3 as="h3">Foundations</H3>
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

export default withRouter(FoundationsSidebar)
