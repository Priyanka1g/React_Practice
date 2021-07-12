import Button from '../UI/button/button';
import Card from '../UI/card/card'
import User from './user'
import { useState } from 'react';

const DUMMY_USERS = [
    { id: '1', name: 'Sonali' },
    { id: '2', name: 'Manu' },
    { id: '3', name: 'Juliet' },
  ];

const Users = ()=>{
    const[show, setShow] = useState(true);

     const togglehandler = ()=>{
         setShow((curr)=>!curr)
    }
    return(
        <Card>
        <Button onclick={togglehandler}> {show?'Hide': 'Show'} Users</Button>
        {show &&<User list={DUMMY_USERS}/>}
        </Card>
    )
}

export default Users;
