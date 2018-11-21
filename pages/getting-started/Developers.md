# Developers

## Install

Install TransferWise Components in your application:

```
npm install --save @transferwise/components
```

## Usage

All of our components are exported by name from `@transferwise/components`, so you can import them with:

```
import { Modal } from '@transferwise/components'
```

### Styling

This project uses [styled-components](https://www.styled-components.com/) under the hood to generate static CSS from some component styles, but still relies on [TransferWise Bootstrap](https://bootstrap.transferwise.com/) for some component styles that haven't yet been ported over.

To ensure proper styling, you'll need to link to the most recent build of TransferWise Bootstrap CSS in one of the following ways:

1. Link directly to the [CDN](https://bootstrap.transferwise.com/dist/css/bootstrap.min.css)
2. Otherwise, you can use `npm` and link `node_modules/bootstrap/dist/css/bootstrap.min.css` to your source directory.

```
<link href="https://bootstrap.transferwise.com/dist/css/bootstrap.min.css" rel="stylesheet">

import { Modal } from '@transferwise/components'
```

export const meta = {
  displayName: 'Developers'
}
