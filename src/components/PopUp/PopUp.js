import React from 'react';
import './PopUp.css';
import { connect } from 'react-redux'
import { flagAction } from '../../actions/index'

const PopUp = (props) => {

    var timer = undefined


    console.log('showPopUp : ' + JSON.stringify(props.todos.showPopUp))

    

    var poppop = (
        <div className={'popup'}>
            <div className='popup\_inner'>
                <h1>deleting</h1>
                <button onClick={() => props.flagNoDelete()}>UNDO</button>
            </div>
        </div>
    )

    return (
        <div>
            {props.todos.showPopUp === true? poppop : null}
        </div>
    )
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
    flagNoDelete: () => dispatch(flagAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)