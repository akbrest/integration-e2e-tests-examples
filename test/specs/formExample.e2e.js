const { expect } = require('@wdio/globals');
const FormExamplePage = require('../pageobjects/formExample.page');

describe('Form Example Tests', () => {
  it('should create new todo', async () => {
    await FormExamplePage.open();
    //await browser.debug();
    await FormExamplePage.create('New todo from e2e test');

    const todos = await FormExamplePage.listTodos;
    await expect(todos.length).toBe(3);
    await expect(todos[0]).toHaveText('New todo from e2e test');
  });

  it('should delete all todos', async () => {
    await FormExamplePage.open();
    await FormExamplePage.deleteAll();

    const todos = await FormExamplePage.listTodos;
    await expect(todos.length).toBe(0);

    const counter = await FormExamplePage.counter;
    await expect(counter).toHaveText('0 Todo');
  });

  it('should create new todo, toggle and delete', async () => {
    await FormExamplePage.open();
    await browser.pause(2000);
    await FormExamplePage.create('Completed todo');
    await browser.pause(2000);

    const todo = await FormExamplePage.get('Completed todo');
    await expect(todo).toBeExisting();
    await browser.pause(2000);

    await FormExamplePage.toggle(todo);
    await expect(todo.$('p')).toHaveElementClass('complete');
    await browser.pause(2000);

    await FormExamplePage.delete(todo);
    await expect(todo).not.toBeExisting();
    await browser.pause(2000);
  });
});
