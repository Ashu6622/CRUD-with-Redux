import {useEffect, useState} from 'react'
import {useSelector, useDispatch, } from 'react-redux'

import {getUserById, editUser} from '../features/slice'
import {useParams, useNavigate} from 'react-router-dom'

const Update = ()=>{

    const [updateUser, setUpdatedUser] = useState();
    
    const {uniqueUser, loading} = useSelector((state)=> state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getUserById(id));
    }, [])

    useEffect(()=>{
        setUpdatedUser(uniqueUser)
    }, [uniqueUser])

    if(loading){
        return <h1>Loading...</h1>
    }

    const handleUserInfo = (e)=>{
        setUpdatedUser({...updateUser, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editUser(updateUser));
        return navigate('/', {replace:true})
    }

    return(

          <div>
            <h1>Update Page</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <input type='text' placeholder='Name' name='name' value={updateUser?.name} onChange={handleUserInfo}/>
                </div>
                <div>
                   <input type='email' placeholder='Email' name='email' value={updateUser?.email} onChange={handleUserInfo}/>
                </div>
                <div>
                    <input type='number' placeholder='Age' name='age' value={updateUser?.age} onChange={handleUserInfo}/>
                </div>
                <div>
                    <div>
                    <label>Male</label>
                    <input type='radio' name='gender' value='male' checked={updateUser?.gender === 'male'} onChange={handleUserInfo}/>
                    </div>
                   <div>
                    <label>Female</label>
                    <input type='radio' name='gender' value='female' checked={updateUser?.gender === 'female'} onChange={handleUserInfo}/>
                    </div>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Update