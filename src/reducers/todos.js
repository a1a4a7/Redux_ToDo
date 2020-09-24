

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // console.log('print: ' + state)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    descr: action.descr
                }
            ]

        default:
            return state
    }

}


export default todos;