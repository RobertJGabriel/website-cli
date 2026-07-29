# website-cli

> My CV as a command-line app.

[![npm](https://img.shields.io/npm/v/robertgabriel.svg)](https://www.npmjs.com/package/robertgabriel)

Run one command and get an interactive CV in the terminal, avatar included.
Built with [ink](https://github.com/vadimdemedes/ink) for the interface and
[terminal-image](https://github.com/sindresorhus/terminal-image) for the picture,
falling back gracefully on terminals without inline image support.

The idea is [Sindre Sorhus'](https://github.com/sindresorhus) — all credit there.

## Usage

No install needed:

```sh
npx robertgabriel
```

Or install it globally:

```sh
npm install -g robertgabriel
```

```sh
robertgabriel
```

Use the arrow keys to move through the menu; selecting a link opens it in your
browser.

## Built with

| Package | Role |
| --- | --- |
| `ink` | React for interactive command-line apps |
| `ink-select-input` | The menu |
| `terminal-image`, `term-img` | Avatar rendering, with fallback |
| `meow` | Argument parsing |
| `opn` | Opening links |

## License

MIT © Robert James Gabriel
