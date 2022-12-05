import React from 'react'

const Task = ({task}) => {

  const distance = task.distance

  return (
    <>
       <div>{task.name}</div> 
        <ul>
        {distance.map((time) =><li>{time}</li>)}
        </ul>
        <button>時間を編集</button>
        <button>タスクを削除</button>
    </>
  )
}

export default Task;