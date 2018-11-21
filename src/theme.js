
const lightBlue = ['#00b9ff', '#00a4df', '#008ec0'];
const navy = ['#37517e', '#2e4369', '#253655'];
const paleBlue = ['#dbf4fe', '#a7e2f9', '#77d9f7'];
const green = ['#2ED06E', '#28b862', '#1d8547'];
const grey = ['#384347', '#4a5860','#5d7079','#6f8691','#829ca9','#a8aaac','#d3d5d8','#e2e6e8','#eaebed','#f2f5f7'];
const orange = ['#FFA600', '#df8700', '#c07500'];
const red = ['#F53636', '#cf3131', '#b62a18'];

const colors = {
  brand: {
    primary: {
      lightBlue: lightBlue[0],
      navy: navy[0]
    },
    secondary: {
      paleBlue: paleBlue[0],
      payGreen: grey[0]
    },
    borderless: '#44EE70',
    success: green[0],
    info: lightBlue[0],
    warning: orange[0],
    danger: red[0],
    disabled: grey[5]
  },
  ui: {
    lightBlue,
    navy,
    paleBlue,
    green,
    orange,
    red,
    grey,
  },
  state: {
    success: '#d6f5e2',
    info: grey[9],
    warning: '#fff3dd',
    danger: '#ffdfdf',
    disabled: grey[7]
  }
}

const theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  fonts: {
    normal: fontStack([
      'Averta',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
  },
  fontWeights: {
    light: 300,
    normal: 500,
    semibold: 600,
    bold: 800
  },
  colors,
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    40,
    48
  ],
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: '24px'
  },
  radii: [0, 2, 3, 6],
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128]
}

export default theme
export {colors}

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}
