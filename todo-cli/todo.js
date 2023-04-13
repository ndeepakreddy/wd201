/* eslint-disable no-undef */
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    const now = new Date().setHours(0, 0, 0, 0)
    return all.filter(todoItem => new Date(todoItem.dueDate).setHours(0, 0, 0, 0) < now && !todoItem.completed)
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    const now = new Date().setHours(0, 0, 0, 0)
    return all.filter(todoItem => new Date(todoItem.dueDate).setHours(0, 0, 0, 0) === now && !todoItem.completed || todoItem.completed)
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    const now = new Date().setHours(0, 0, 0, 0)
    return all.filter(todoItem => new Date(todoItem.dueDate).setHours(0, 0, 0, 0) > now && !todoItem.completed)
  }

  const toDisplayableList = (list) => {
    return list.map((todoItem) => {
      const checkbox = todoItem.completed ? '[x]' : '[ ]'
      const dueDate = new Date(todoItem.dueDate).setHours(0, 0, 0, 0)
      const now = new Date().setHours(0, 0, 0, 0)
      return `${checkbox} ${todoItem.title}${dueDate === now ? '' : ' ' + todoItem.dueDate}`
    }).join('\n')
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}
module.exports = todoList
