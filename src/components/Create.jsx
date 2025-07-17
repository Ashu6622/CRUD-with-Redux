import {useDispatch, useSelector} from 'react-redux'
import { createUser } from "../features/slice";
import {useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Create = ()=>{

    const [userInfo, serUserInfo] = useState({});
     const navigate = useNavigate();
     const dispatch = useDispatch()
     const {loading} = useSelector((state)=> state.app);

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(createUser(userInfo));
        return navigate('/' , {replace:true})
    }

    const handleUserInfo = (e)=>{
        serUserInfo({...userInfo , [e.target.name] : e.target.value});
    }

    if(loading){
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Create Page</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <input type='text' placeholder='Name' name='name' onChange={handleUserInfo}/>
                </div>
                <div>
                   <input type='email' placeholder='Email' name='email' onChange={handleUserInfo}/>
                </div>
                <div>
                    <input type='number' placeholder='Age' name='age' onChange={handleUserInfo}/>
                </div>
                <div>
                    <div>
                    <label>Male</label>
                    <input type='radio' name='gender' value='male' onChange={handleUserInfo}/>
                    </div>
                   <div>
                    <label>Female</label>
                    <input type='radio' name='gender' value='female' onChange={handleUserInfo}/>
                    </div>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Create