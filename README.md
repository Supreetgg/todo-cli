# todo-cli

A tiny, dependency-free command-line to-do list written in Node.js.

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

## Overview

`todo-cli` lets you manage a simple task list from the terminal. Tasks are stored in a plain JSON file (`todos.json`) next to the script, so there is no database, no account and no install step beyond having Node.js.

## Features

- Add tasks with a single command
- List all tasks with a checkbox showing which are done
- Mark tasks as completed by number
- Clear completed tasks in one step
- Zero dependencies and a single source file (`todo.js`)

## Requirements

- [Node.js](https://nodejs.org/) 14 or newer (check with `node --version`)

## Installation

```bash
git clone https://github.com/Supreetgg/todo-cli.git
cd todo-cli
```

There is nothing to install. The program uses only Node.js built-in modules.

## Usage

| Command | What it does |
|---|---|
| `node todo.js add "text"` | Add a new task |
| `node todo.js list` | Show all tasks |
| `node todo.js done <n>` | Mark task number `n` as complete |
| `node todo.js clear` | Remove all completed tasks |

You can also use the npm shortcuts, for example `npm start -- list`.

### Example session

```text
$ node todo.js add "buy milk"
Added: buy milk
$ node todo.js add "write report"
Added: write report
$ node todo.js list
1. [ ] buy milk
2. [ ] write report
$ node todo.js done 1
Completed: buy milk
$ node todo.js list
1. [x] buy milk
2. [ ] write report
$ node todo.js clear
Removed completed items.
```

## How it works

- Tasks are kept in `todos.json` in the same folder as `todo.js`, as an array of `{ "text": string, "done": boolean }` objects.
- The file is created on the first `add` and is listed in `.gitignore`, so your personal tasks are never committed.
- Task numbers shown by `list` are 1-based positions in that array. Numbers can change after `clear`, so run `list` again before using `done`.

## Project structure

```text
todo-cli/
├── todo.js        # the whole program
├── package.json   # project metadata and npm scripts
├── .gitignore     # ignores todos.json and node_modules
├── LICENSE        # MIT license
└── README.md
```

## Troubleshooting

- **`node` is not recognized**: install Node.js and reopen your terminal.
- **"No such item."**: the number you gave is not in the list. Run `node todo.js list` to see valid numbers.
- **Tasks disappeared**: `todos.json` lives next to `todo.js`. If you run a copy of the script from another folder, it uses that folder's own file.

## License

Released under the [MIT License](LICENSE).
