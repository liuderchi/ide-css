const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')

class CSSLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return ['source.css'] }
  getLanguageName () { return 'CSS' }
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
