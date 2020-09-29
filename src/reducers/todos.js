
const initialState = {

    addlist: [{ id: 0, text: "first", descr: "first_description" },
    { id: 1, text: "first", descr: "first_description" },
    { id: 2, text: "second", descr: "first_description" },
    { id: 3, text: "third", descr: "first_description" },
    { id: 4, text: "forth", descr: "first_description" }],
    deletedlist: [{ id: 99, text: "first", descr: "first_description" }],
    activeAddTab: true,
    showPopUp: false,
    searchKey: '',
    deleteFlag: true

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

        case 'SEARCH_ACTION': {
            return {
                ...state,
                searchKey: action.value
            }
        }
        case 'FLAG_ACTION': {
            return {
                ...state,
                deleteFlag: false,
            }
        }
        case 'FLAG_ACTION2': {
            return {
                ...state,
                deleteFlag: true,
                showPopUp: true

            }
        }

        case 'DELETE': {

            var deletedItem = state.addlist.filter(data => action.id
                === data.id)
            console.log('delete_item: ' + JSON.stringify(...deletedItem))
            state.deletedlist.push(...deletedItem)
                console.log('deleteArray:'+ state.deletedlist)


            return {
                ...state,
                addlist: state.addlist.filter(data => action.id !== data.id),
                showPopUp: false
                

            }
        }
        default:
            return state


    }
}






export default todos;