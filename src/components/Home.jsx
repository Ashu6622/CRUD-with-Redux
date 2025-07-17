import {useEffect} from 'react'
import {getUser, deleteUser} from '../features/slice'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = ()=>{

    const {users, loading, error} = useSelector((state)=> state.app);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUser())
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Home Page</h1>

            {
                users?.map((items)=>{

                    return(
                        <div key={items.id}>
                            <h3>{items.name}</h3>
                            <h3>{items.email}</h3>
                            <h3>{items.age}</h3>
                            <h3>{items.gender}</h3>
                            <button onClick={()=> dispatch(deleteUser(items.id))}>Delete</button>
                            <Link to={`/update/${items.id}`}><button>Edit</button></Link>
                            <br />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home