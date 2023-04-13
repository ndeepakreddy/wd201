/* eslint-disable no-undef */
const todoList = require('../todo')
describe('todoList', () => {
  let list

  beforeEach(() => {
    list = todoList()
  })

  test('creating a new todo', () => {
    const todo = {
      title: 'Buy groceries',
      dueDate: '2023-04-13',
      completed: false
    }
    list.add(todo)
    expect(list.all).toContain(todo)
  })

  test('marking a todo as completed', () => {
    const todo = {
      title: 'Buy groceries',
      dueDate: '2023-04-13',
      completed: false
    }
    list.add(todo)
    list.markAsComplete(0)
    expect(list.all[0].completed).toBe(true)
  })

  test('retrieval of overdue items', () => {
    const overdueTodo = {
      title: 'Pay rent',
      dueDate: '2023-04-10',
      completed: false
    }
    const notOverdueTodo = {
      title: 'Buy groceries',
      dueDate: '2023-04-13',
      completed: false
    }
    list.add(overdueTodo)
    list.add(notOverdueTodo)
    expect(list.overdue()).toContain(overdueTodo)
    expect(list.overdue()).not.toContain(notOverdueTodo)
  })

  test('retrieval of due today items', () => {
    const dueTodayTodo = {
      title: 'Call mom',
      dueDate: '2023-04-12',
      completed: false
    }
    const notDueTodayTodo = {
      title: 'Buy groceries',
      dueDate: '2023-04-13',
      completed: false
    }
    list.add(dueTodayTodo)
    list.add(notDueTodayTodo)
    expect(list.dueToday()).toContain(dueTodayTodo)
    expect(list.dueToday()).not.toContain(notDueTodayTodo)
  })

  test('retrieval of due later items', () => {
    const dueLaterTodo = {
      title: 'Buy groceries',
      dueDate: '2023-04-14',
      completed: false
    }
    const notDueLaterTodo = {
      title: 'Pay rent',
      dueDate: '2023-04-10',
      completed: false
    }
    list.add(dueLaterTodo)
    list.add(notDueLaterTodo)
    expect(list.dueLater()).toContain(dueLaterTodo)
    expect(list.dueLater()).not.toContain(notDueLaterTodo)
  })
})
