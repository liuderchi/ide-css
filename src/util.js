const registerConfigOnChangeHandlers = () => {
  atom.config.onDidChange('ide-css.additionalGrammars', () =>
    promptUserReloadAtom('Reload `ide-css` to apply additional grammars')
  )
  atom.config.onDidChange('ide-css.lessSupport', () => promptUserReloadAtom() )
  atom.config.onDidChange('ide-css.scssSupport', () => promptUserReloadAtom() )
}

const promptUserReloadAtom = (msg = 'Reload `ide-css` to apply changes') => {
  const buttons = [{
    text: 'Reload',
    onDidClick: () => atom.reload(),
  }]
  atom.notifications.addInfo(
    msg,
    {
      buttons,
      dismissable: true,
    }
  )
}

module.exports = {
  registerConfigOnChangeHandlers,
  promptUserReloadAtom,
}
