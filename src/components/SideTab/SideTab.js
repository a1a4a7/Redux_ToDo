import React from 'react';
import './SideTab.css'
import { connect } from 'react-redux'
import { statChange } from '../../actions/index'


const SideTab = ({ props, tabClick }) => {

    // console.log(props === true)

    return (
        <div>
            <div className={props === true ? 'TrueTab' : ''} onClick={() => tabClick(true)}>Added List</div>
            <div className={props === false ? 'FalseTab' : ''} onClick={() => tabClick(false)}>Removed List</div>


        </div>
    );
}

const mapStateToProps = state => ({
    props: state.todos.activeAddTab
})

const mapDispatchToProps = dispatch => ({
    tabClick: status => dispatch(statChange(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideTab);
