#!/usr/bin/env node
// Tiny to-do list. Usage: node todo.js add "text" | list | done <n> | clear
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "todos.json");
const load = () => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : []);
const save = (t) => fs.writeFileSync(file, JSON.stringify(t, null, 2));

const [cmd, ...rest] = process.argv.slice(2);
const todos = load();

switch (cmd) {
  case "add": {
    const text = rest.join(" ").trim();
    if (!text) return console.log('Usage: node todo.js add "something to do"');
    todos.push({ text, done: false });
    save(todos);
    console.log(`Added: ${text}`);
    break;
  }
  case "list":
    if (!todos.length) console.log("Nothing to do!");
    todos.forEach((t, i) => console.log(`${i + 1}. [${t.done ? "x" : " "}] ${t.text}`));
    break;
  case "done": {
    const i = parseInt(rest[0], 10) - 1;
    if (!todos[i]) return console.log("No such item.");
    todos[i].done = true;
    save(todos);
    console.log(`Completed: ${todos[i].text}`);
    break;
  }
  case "clear":
    save(todos.filter((t) => !t.done));
    console.log("Removed completed items.");
    break;
  default:
    console.log('Commands: add "text" | list | done <n> | clear');
}
