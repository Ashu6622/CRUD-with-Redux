import {Link} from 'react-router-dom'


const Navbar = ()=>{

    return(
        <div>
            <Link to='/' >Home</Link><br /><br />
            <Link to='/create' >Create</Link><br /><br />
        </div>
    )
}

export default Navbar;