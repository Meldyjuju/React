import React from 'react'

const EditComponent = ({user , onChangehandleEditInput, closeEditing, onSubmitedithandle} ) => {
  return (
    <div>EditComponent
      <input name="username" value={user.username} onChange={(e) => onChangehandleEditInput(e)} />
      <input name="firstname" value={user.firstname} onChange={(e) => onChangehandleEditInput(e)}/>
      <input name="password" value={user.password} onChange={(e) => onChangehandleEditInput(e)}/>
      <input name="telephone" value={user.telephone} onChange={(e) => onChangehandleEditInput(e)}/>
      <input name="address" value={user.address} onChange={(e) => onChangehandleEditInput (e)}/>
      <button onClick= {onSubmitedithandle}>แก้ไข</button>
      <button onClick={closeEditing}>ยกเลิก</button>
    </div>
  )
}

export default EditComponent