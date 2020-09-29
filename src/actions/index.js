

let nextTodoId = 1


export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text.iinput,
    descr: text.iinput2
})

export const statChange = (activeAddTab) => ({
    type: 'STAT_CHANGE',
    activeAddTab
})