import styled from "styled-components";
import Alert, {AlertStyles} from '../../src/Alert'

const MarkdownAlert = styled(Alert)`
  .markdown-body & {
    ${AlertStyles}
  }
`
export default MarkdownAlert
