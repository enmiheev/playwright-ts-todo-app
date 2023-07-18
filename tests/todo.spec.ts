import { test, expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import ToDoPage from '../pages/todo.page'
// faker.lorem.sentence
test.describe('Check default page state', async () => {
  let page: Page
  let toDoPage: ToDoPage

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    toDoPage = new ToDoPage(page)
    await toDoPage.navigate()
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('Check title', async () => {
    await expect(toDoPage.header()).toHaveText('Todo App')
  })

  test('Check empty list default state', async () => {
    await expect(toDoPage.emptyListMsg()).toHaveText('Todo list is empty')
  })
})
