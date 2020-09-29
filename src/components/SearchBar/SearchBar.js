import React from 'react';
import './SearchBar.css'
import { connect } from 'react-redux'
import { searchAction } from '../../actions/index'


const SearchBar = (props) => {

    console.log(props)
    return (
        <div>
            <input placeholder="RealTime Search" type="text" onChange={(e) => props.SearchDispatch(e.target.value)} />
        </div>
    );
}


const mapStateToProps = state => ({
    props: state
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
    SearchDispatch: value => dispatch(searchAction(value))
})

export default connect(mapStateToProps,
    mapDispatchToProps)(SearchBar);
