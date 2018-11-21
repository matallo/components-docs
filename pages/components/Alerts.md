import MarkdownAlert from '../../components/Markdown/MarkdownAlert'

# Alerts

<MarkdownAlert info>
  <strong>Remember!</strong> This is a Bootstrap component, go <a href="https://bootstrap.transferwise.com/components/#alerts">here</a> for more info.
</MarkdownAlert>

<div>
  <p className="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
</div>

## Options

<MarkdownAlert success>
  <strong>Well done!</strong> You successfully read <a href="#">this important alert message</a>.
</MarkdownAlert>

<MarkdownAlert>
  <strong>Heads up!</strong> This <a href="#">alert needs your attention</a>, but it's not super important.
</MarkdownAlert>

<MarkdownAlert warning>
  <strong>Warning!</strong> Better check yourself, you're <a href="#">not looking too good</a>.
</MarkdownAlert>

<MarkdownAlert danger>
  <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try submitting again.
</MarkdownAlert>

```
<Alert success>
  <strong>Well done!</strong> You successfully read <a href="#">this important alert message</a>.
</MarkdownAlert>

<Alert>
  <strong>Heads up!</strong> This <a href="#">alert needs your attention</a>, but it's not super important.
</Alert>

<Alert warning>
  <strong>Warning!</strong> Better check yourself, you're <a href="#">not looking too good</a>.
</Alert>

<Alert danger>
  <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try submitting again.
</Alert>
```

## Component props

| Prop name | Type | Description
| :- | :- | :- |
| **success** (Optional) | boolean | |
| **info** (Optional) | boolean | |
| **warning** (Optional) | boolean | |
| **danger** (Optional) | boolean | |

export const meta = {
  displayName: 'Alerts',
  abstractURL: 'https://share.goabstract.com/a371db59-a0d0-40d4-b233-5fae380f0071'
}
