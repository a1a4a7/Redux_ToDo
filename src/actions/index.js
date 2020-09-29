

let nextTodoId = 5


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

export const searchAction = (value) => {
    return (
        {
            type: 'SEARCH_ACTION',
            value
        }
    )
}

export const flagAction = () => ({
    type: 'FLAG_ACTION'
})

export const setFlagAction = () => ({
    type: 'FLAG_ACTION2'
})


export const deleteAction = (id) => ({
    type: 'DELETE',
    id
})