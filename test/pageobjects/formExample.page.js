const { $ } = require('@wdio/globals');
const Page = require('./page');

class FormExamplePage extends Page {
  get inputTodo() {
    return $('input[type="text"]');
  }
  get btnSubmit() {
    return $('button=Add Todo');
  }
  get counter() {
    return $('h2[data-testid="todo-counter"]');
  }
  get listTodos() {
    return $$('div[data-testid="todo"]');
  }

  async get(todo) {
    return $(`div[data-testid="todo"]=${todo}`);
  }
  async toggle(todo) {
    await todo.$('div[data-testid="toggle"]').click();
  }
  async delete(todo) {
    await todo.$('div[data-testid="delete"]').click();
  }
  async create(todo) {
    await this.inputTodo.setValue(todo);
    await this.btnSubmit.click();
  }
  async deleteAll() {
    for (const todo of await this.listTodos) {
      await this.delete(todo);
    }
  }

  open() {
    return super.open('form-example');
  }
}

module.exports = new FormExamplePage();
