# ide-css

[![apm-download-count][apm-download-count]][apm-download-link]
[![travis-status][travis-status]][travis-project]
[![dependency-status][david-status]][david-project]

Atom-IDE for CSS, LESS and SCSS language

![demo1][demo1]

![demo2][demo2]

## Features

  - CSS rules Outline in *Outline View*
      - Quick navigation by clicking
      - Quick CSS rule selection by double clicking
      - Searching by entering element name or class name in selector
  - Tooltips for
      - CSS selector
      - CSS property
      - Linter message
  - Support other CSS preprocessor grammars: LESS, SCSS


## Requirements

you need to install following requirements before installing [`ide-css`][apm-download-link]:

  - Atom editor *1.21.0-beta0* or higher version
  - Atom package [`atom-ide-ui`][atom-ide-ui]


## FAQ

> Why I could not download this Atom package?

Please make sure you have installed all softwares in [*Requirements*](#requirements) section.

---

> I've installed ide-css. Why there is still nothing shown in Outline View when css opened?

Please check the file exists in the *Project Tree View* so that it can be handled by [`ide-css`][apm-download-link].

In addition, to show outline view, use Atom command `Outline View: Toggle`.

---

> How can I customize this package?

Please read [CONTRIBUTING.md][CONTRIBUTING.md] for more details.

---

  - :confused: Still feeling confused? Please [provide feedbacks via issues][create-issue] to make ide-css better. :pray:


## Notes and References
  - [`ide-css`][apm-download-link] acts as a *client* of language server basing on [`atom-languageclient`][atom-languageclient]
  - [`vscode-css-languageserver-bin`][vscode-css-languageserver-bin] acts as a *language server* and analyze your CSS in separate process
  - language servers and clients are talking with [Language Server Protocol (LSP)][lsp]


## License

[MIT License][mit-license]


[apm-download-count]: https://img.shields.io/apm/dm/ide-css.svg "apm-download-count"
[apm-download-link]: https://atom.io/packages/ide-css "apm-download-link"
[travis-status]: https://travis-ci.org/liuderchi/ide-css.svg?branch=master "travis-status"
[travis-project]: https://travis-ci.org/liuderchi/ide-css "travis-project"
[david-status]: https://david-dm.org/liuderchi/ide-css.svg "david-status"
[david-project]: https://david-dm.org/liuderchi/ide-css "david-project"
[demo1]: https://user-images.githubusercontent.com/4994705/30840126-2a71c32a-a23b-11e7-8dd4-9189723c438a.png "demo1"
[demo2]: https://user-images.githubusercontent.com/4994705/30840198-864c7fb4-a23b-11e7-9db7-0c9239b83205.png "demo2"

[atom-ide-ui]: https://atom.io/packages/atom-ide-ui "atom-ide-ui"
[CONTRIBUTING.md]: https://github.com/liuderchi/ide-css/blob/master/CONTRIBUTING.md "CONTRIBUTING.md"
[create-issue]: https://github.com/liuderchi/ide-css/issues/new "create-issue"

[atom-languageclient]: https://github.com/atom/atom-languageclient "atom-languageclient"
[vscode-css-languageserver-bin]: https://github.com/vscode-langservers/vscode-css-languageserver-bin "vscode-css-languageserver-bin"
[lsp]: http://langserver.org/ "lsp"

[mit-license]: https://liuderchi.mit-license.org/ "mit-license"
