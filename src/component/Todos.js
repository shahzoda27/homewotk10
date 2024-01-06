import React from 'react'
import { useState } from 'react'

const Todos = () => {
    const [users,setUsers] = useState([
    {id:1, title:"Doston",check:false},
    {id:2, title:"Behruz",check:false},
    {id:3, title:"Avazxon",check:false}])
    const [actives,setActives] = useState([
        {id:4, title:"Said",check:false},
        {id:5, title:"Akbar",check:false},
        {id:6, title:"Abduvohid",check:false}])
        const moveItems=(value)=>{
            if (value === "users") {
                users.forEach((item,index)=>{
                    if (item.check === true) {
                        actives.push({...item ,check:false})
                        users.splice(index,1)
                        setActives([...actives])
                        setUsers([...users])
                    }
                })
            }else {
                actives.forEach((item,index)=>{
                    if (item.check === true) {
                        users.push({...item ,check:false})
                        actives.splice(index,1)
                        setUsers([...users])
                        setActives([...actives])
                    }
                })
            }
            }
            const handleChangeUser = (id)=>{
                users.forEach((item)=>{
                    if (item.id === id) {
                        item.check = !item.check
                    }
                })
            }  
             const handleChangeActive = (id)=>{
                actives.forEach((item)=>{
                    if (item.id === id) {
                        item.check = !item.check
                    }
                })
            }
  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-6'>
            <div className="card">
                <div className="card-header">
            <h1 className='text-center'>Users</h1>
                </div>
                <div className="card-body">
            {
                users.map((item,index)=>{
                    return <div key={index} className='d-flex align-items-center gap-3'>
                        <span>{item.title}</span>
                        <input type="checkbox" onChange={()=>handleChangeUser(item.id)} />
                    </div>
                })
            }
            </div>
            <div className="card-footer">
            <button onClick={()=>moveItems("users")} className='btn btn-outline-primary'>O'tkazish</button>
            </div>
            </div>
        </div>


        <div className='col-md-6'>
            <div className="card">
                <div className="card-header">
            <h1 className='text-center'>Actives</h1>
                </div>
                <div className="card-body">
            {
                actives.map((item,index)=>{
                    return <div key={index} className='d-flex align-items-center gap-3'>
                        <span>{item.title}</span>
                        <input type="checkbox" onChange={()=>handleChangeActive(item.id)}/>
                    </div>
                })
            }
            </div>
            <div className="card-footer">
            <button  onClick={()=>moveItems("actives")} className='btn btn-outline-danger'>O'tkazish</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todos
