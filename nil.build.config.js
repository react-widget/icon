module.exports = (evn, resolve) => {
    return {
        appEntryJs: resolve('examples/index.js'),
        appEntryHtml: resolve('examples/index.html'),
    }
}