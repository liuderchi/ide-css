const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')
const { registerConfigOnChangeHandlers } = require('./util')

registerConfigOnChangeHandlers()

class CSSLanguageClient extends AutoLanguageClient {
  getGrammarScopes () {
    const { additionalGrammars, lessSupport, scssSupport } = atom.config.get('ide-css')
    return ['source.css']
      .concat(lessSupport ? 'source.css.less' : [])
      .concat(scssSupport ? 'source.css.scss' : [])
      .concat(additionalGrammars || [])
  }
  getLanguageName () { return 'CSS/LESS/SCSS' }
  getServerName () { return 'VSCODE-CSS-LANG-SERVER' }
  getConnectionType() { return 'stdio' } // ipc, socket, stdio

  startServerProcess () {
    return super.spawnChildNode([
      path.resolve(path.join(
        __dirname,
        '../node_modules/vscode-css-languageserver-bin/cssServerMain'
      )),
      '--stdio',
    ]) // --node-ipc, stdio, socket={number}
  }

  preInitialization (connection) {
    connection.onCustom('$/partialResult', () => {}) // Suppress partialResult until the language server honours 'streaming' detection
  }
}

module.exports = new CSSLanguageClient()
