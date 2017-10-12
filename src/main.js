const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')
const { registerConfigOnChangeHandlers } = require('./util')
const { registerHelpCommands } = require('./help_cmd')
const { promptUserReloadAtom } = require('./util')

const packageJsonPath = path.join(__dirname, '../package.json')

class CSSLanguageClient extends AutoLanguageClient {
  constructor() {
    super()
    registerConfigOnChangeHandlers({ packageJsonPath }).call()
    registerHelpCommands({ packageJsonPath })
    promptUserReloadAtom({ packageJsonPath }).call(this, 'foo reload')
  }
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
