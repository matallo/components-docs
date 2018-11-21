const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});
const getPageMap = require('next-page-map')

const pageExtensions = ['js', 'jsx', 'md', 'mdx']

module.exports = withMDX({
  pageExtensions,
  publicRuntimeConfig: {
    pageExtensions,
    pageMap: getPageMap({pageExtensions})
  }
});
