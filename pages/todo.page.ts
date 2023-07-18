import { Page, Locator } from '@playwright/test'

class ToDoPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async navigate() {
    await this.page.goto('/')
  }

  header(): Locator {
    return this.page.locator('.App>h1')
  }

  emptyListMsg(): Locator {
    return this.page.locator('[class*="TodoList"]>h2')
  }

  todosInput(): Locator {
    return this.page.locator('input[placeholder="Enter new todo"]')
  }

  submitBtn(): Locator {
    return this.page.locator('button[type="submit"]')
  }

  resetTodosBtn(): Locator {
    return this.page.locator('button[title="Reset Todos"]')
  }

  clearCompletedTodosBtn(): Locator {
    return this.page.locator('button[title="Clear Completed Todos"]')
  }
}

export default ToDoPage
