const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')

class CSSLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return ['source.css', 'source.css.less', 'source.css.scss'] }
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

const noticeUserPkgRenamed = () => {
  const newPkgLinkMarkup = '[`ide-css-less-scss`](https://atom.io/packages/ide-css-less-scss)'
  atom.notifications.addInfo(
    `## \`ide-css\` is now ${newPkgLinkMarkup}.\n\n\`ide-css\` is renamed as ${newPkgLinkMarkup}.<br/>Please install ${newPkgLinkMarkup} for latest features.`,
    {
      buttons: [
        {
          text: 'Install ide-css-less-scss in Settings',
          onDidClick: () => {
            const paneElement = atom.views.getView(atom.workspace.getActivePane())
            atom.commands.dispatch(paneElement, 'settings-view:install-packages-and-themes')
          },
        },
      ],
      dismissable: true,
    }
  )
}
noticeUserPkgRenamed()

module.exports = new CSSLanguageClient()
