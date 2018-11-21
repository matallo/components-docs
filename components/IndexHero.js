import React from 'react'
import {description, name, version} from '@transferwise/components/package.json'

const IndexHero = () => (
  <div>
    {name} v{version}
    {description}
  </div>
)

export default IndexHero
