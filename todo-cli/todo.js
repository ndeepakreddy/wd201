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

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList()

const formattedDate = d => {
  return d.toISOString().split('T')[0]
}

const dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log('My Todo-list\n')

console.log('Overdue')
const overdues = todos.overdue()
const formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log('\n')

console.log('Due Today')
const itemsDueToday = todos.dueToday()
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log('\n')

console.log('Due Later')
const itemsDueLater = todos.dueLater()
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log('\n\n')
