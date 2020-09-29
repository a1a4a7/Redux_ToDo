import React from 'react';
import { connect } from 'react-redux';
import './List.css'

const ItemList = ({ props }) => {

  console.log(props)
  var items;


  if (props.todos.activeAddTab === true) {

    items = props.todos.addlist.map(data => {
      return (
        <li key={data.id}>
          <span>id: {data.id} </span>
          <span>text: {data.text} </span>
          <span>descr: {data.descr} </span>
          <span style={{
            color: "red"
          }} onClick={() => console.log('here')}>X</span>
        </li>
      )
    })
  }

  else {

    items = props.todos.deletedlist.map(data => {
      return (

        <li key={data.id}>
          <span>id: {data.id} </span>
          <span>text: {data.text} </span>
          <span>descr: {data.descr} </span>
        </li>
      )
    }
    )

  }


  return (
    <div>
      <div>I am a list</div>
      { items}
    </div>
  )
}

const mapStateToProps = state => ({
  // props: { ...state }
  props: state
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)