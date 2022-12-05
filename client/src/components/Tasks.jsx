import axios from "axios";
import { useEffect ,useState } from "react";
import Task from "./Task"

// tasksURL
const baseURL = 'http://localhost:3001/tasks'

const Tasks =()=> {

    const [tasks, setTasks] = useState([]);

    // axios get
    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            console.log("getStatus:", res);
            setTasks(res.data)
        }).catch((err)=>{
            console.log('getErr:',err);
        })
    },[])

    // const handleAddTask=()=>{
    //     // axios post
    //     axios.post(baseURL, {
    //         id:5,name:'筋トレ',distance:[1,2,3]
    //     })
    //     .then((res)=>{
    //         console.log("postStatus:", res.data);
    //     }).catch((err)=>{
    //         console.log('postErr:',err);
    //     })
    // };

    return(
        <>
            {/* <button onClick={handleAddTask}>タスクを追加</button> */}
            <div>    
                {tasks.map((task) =><Task task={task}/>)}
            </div>
        </>
    )
}

export default Tasks;