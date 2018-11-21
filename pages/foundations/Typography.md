import MarkdownAlert from '../../components/Markdown/MarkdownAlert'
import { Box } from '@rebass/grid'

import Alert from '../../src/Alert';
import {H1, H2, H3, H4, H5, H6} from '../../src/Headings';

# Typography

<MarkdownAlert warning>
  <strong>Warning!</strong> This is a Brand component, go <a href="https://brand.transferwise.com/typography-intro/">here</a> for more info.
</MarkdownAlert>

## Headings

Headings from `<H1>` through `<H6>`, are available.

<Box mb={3}>
  <H1>h1. Bootstrap heading</H1>
  <H2>h2. Bootstrap heading</H2>
  <H3>h3. Bootstrap heading</H3>
  <H4>h4. Bootstrap heading</H4>
  <H5>h5. Bootstrap heading</H5>
  <H6>h6. Bootstrap heading</H6>
</Box>

```
<H1>h1. Bootstrap heading</H1>
<H2>h2. Bootstrap heading</H2>
<H3>h3. Bootstrap heading</H3>
<H4>h4. Bootstrap heading</H4>
<H5>h5. Bootstrap heading</H5>
<H6>h6. Bootstrap heading</H6>
```

export const meta = {
  displayName: 'Typography',
  abstractURL: 'https://share.goabstract.com/8c1748da-033a-454d-ac7b-838c132b9ed2'
}
