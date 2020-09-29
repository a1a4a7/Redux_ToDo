
const initialState = {

    addlist: [{ id: 0, text: "first", descr: "first_description" }],
    deletedlist: [{ id: 99, text: "first", descr: "first_description" }],
    activeAddTab: true,
    showPopUp: false

}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            // console.log('print: ' + state)


            let newadditem = {
                id: action.id,
                text: action.text,
                descr: action.descr
            }
            console.log(state)
            state.addlist.push(newadditem)

            return {
                ...state,

            }
        }

        case 'STAT_CHANGE': {
            console.log(action.activeAddTab)
            return {

                ...state,
                activeAddTab: action.activeAddTab
            }
        }

        default:
            return state


    }
}






export default todos;