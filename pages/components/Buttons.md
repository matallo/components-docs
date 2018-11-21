import MarkdownAlert from '../../components/Markdown/MarkdownAlert'
import { Box } from '@rebass/grid'

import Button from '../../src/Button.js'

# Buttons

<MarkdownAlert info>
  <strong>Remember!</strong> This is a Bootstrap component, go <a href="https://bootstrap.transferwise.com/css/#buttons">here</a> for more info.
</MarkdownAlert>

<div>
  <p className="lead">Use any of the available button classes to quickly create a styled button.</p>
</div>

## Options

<Box mb={3}>
  <Button success mr={2}>Success</Button>
  <Button info mr={2}>Info</Button>
  <Button warning mr={2}>Warning</Button>
  <Button danger mr={2}>Danger</Button>
  <Button disabled>Disabled</Button>
</Box>

```
<Button success>Success</Button>
<Button info>Info</Button>
<Button warning>Warning</Button>
<Button danger>Danger</Button>
<Button disabled>Disabled</Button>
```

### Outline buttons

<Box mb={3}>
  <Button success outline mr={2}>Success</Button>
  <Button info outline mr={2}>Info</Button>
  <Button warning outline mr={2}>Warning</Button>
  <Button danger outline mr={2}>Danger</Button>
  <Button disabled outline>Disabled</Button>
</Box>

```
<Button success outline>Success</Button>
<Button info outline>Info</Button>
<Button warning outline>Warning</Button>
<Button danger outline>Danger</Button>
<Button disabled outline>Disabled</Button>
```

## Sizes

<Box mb={3}>
  <Button info size={'lg'} mr={2}>Large button</Button>
  <Button info outline size={'lg'}>Large button</Button>
</Box>

```
<Button info size={'lg'}>Large button</Button>
<Button info outline size={'lg'}>Large button</Button>
```

<Box mb={3}>
  <Button info mr={2}>Medium button</Button>
  <Button info outline>Medium button</Button>
</Box>

```
<Button info>Medium button</Button>
<Button info outline>Medium button</Button>
```

<Box mb={3}>
  <Button info size={'sm'} mr={2}>Small button</Button>
  <Button info outline size={'sm'}>Small button</Button>
</Box>

```
<Button info size={'sm'}>Small button</Button>
<Button info outline size={'sm'}>Small button</Button>
```

<Box mb={3}>
  <Button info size={'xs'} mr={2}>Extra small button</Button>
  <Button info outline size={'xs'}>Extra small button</Button>
</Box>

```
<Button info size={'xs'}>Extra small button</Button>
<Button info outline size={'xs'}>Extra small button</Button>
```

## Component props

| Prop name | Type | Description
| :- | :- | :- |
| **success** (Optional) | boolean | |
| **info** (Optional) | boolean | |
| **warning** (Optional) | boolean | |
| **danger** (Optional) | boolean | |
| **disabled** (Optional) | boolean | |
| **outline** (Optional) | boolean | |
| **size** (Optional) | String | `lg`, `sm`, `xs` |

export const meta = {
  displayName: 'Buttons',
  abstractURL: 'https://share.goabstract.com/edd68e26-2dcb-4ce1-83e8-a1ce5f5aa6d0'
}
