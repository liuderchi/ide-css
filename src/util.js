const packageJSON = require('../package.json')

const registerConfigOnChangeHandlers = () => {
  const { name } = packageJSON
  atom.config.onDidChange(`${name}.additionalGrammars`, () =>
    promptUserReloadAtom(`Reload \`${name}\` to apply additional grammars`)
  )
  registerOnChangeForBooleanConfigs(packageJSON)
}

const registerOnChangeForBooleanConfigs = ({ name, configSchema }) => {
  Object.keys(configSchema)
    .map(key => ({ name: key, value: configSchema[key] }))
    .filter(({ value: { type } }) => type === 'boolean')
    .forEach(config => atom.config.onDidChange(`${name}.${config.name}`, () => promptUserReloadAtom()))
}

const promptUserReloadAtom = (msg = `Reload \`${packageJSON.name}\` to apply changes`) => {
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
