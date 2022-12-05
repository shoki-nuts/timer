import axios from "axios";
import { useEffect ,useState } from "react";
import Task from "./Task"


const baseURL = 'http://localhost:3001/tasks'

const Tasks =()=> {

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            console.log("status:", res);
            setTasks(res.data)
        }).catch((err)=>{
            console.log('err:',err);
        })
    },[])

    console.log("タスク",tasks)
    

    return(
        <>
            <button>タスクを追加</button>
            <div>    
                {tasks.map((task) =><Task task={task}/>)}
            </div>
        </>
    )
}

export default Tasks;