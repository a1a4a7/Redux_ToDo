import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './List.css'
import { setFlagAction, deleteAction } from '../../actions/index'



const ItemList = ({ props, setFlag, deletecall }) => {


  
  var newFlag = useRef(props.todos.deleteFlag)
  newFlag.current = props.todos.deleteFlag
  console.log('what is new FLAG: ' + JSON.stringify(newFlag.current))
  

  // console.log('current flag: ' + props.todos.deleteFlag)
  function flagAndDelete(id) {

    setFlag(id)

    console.log('before flag: ' + newFlag.current)

    setTimeout(function callback() {
      console.log('after: ' + newFlag.current)
      if (newFlag.current) {
        deletecall(id)
      }
    }, 3000)
  }




  var items;
  var allitems;

  if (props.todos.activeAddTab === true) {
    items = props.todos.addlist;

  }

  else {
    items = props.todos.deletedlist;

  }

  if (props.searchKey !== null) {
    items = items.filter(data => data.text.toLowerCase().includes(props.todos.searchKey))
  }


  allitems = items.map(data => {
    return (
      <li key={data.id}>
        <span>id: {data.id} </span>
        <span>text: {data.text} </span>
        <span>descr: {data.descr} </span>
        <span style={{
          color: "red"
        }} onClick={() => flagAndDelete(data.id)}>X</span>
      </li>
    )
  })


  return (
    <div>
      <div>I am a list</div>
      { allitems}
      <div>deleteflag: {newFlag.toString()}</div>
    </div>
  )
}


const mapStateToProps = state => ({
  // props: { ...state }
  props: state
})

const mapDispatchToProps = dispatch => ({
  setFlag: id => dispatch(setFlagAction(id)),
  deletecall: id => dispatch(deleteAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)