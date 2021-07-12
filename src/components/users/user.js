import classes from './user.module.css'
const User = (props)=>{
    return (
        <ul >
         {props.list.map((user) => (
        <li className={classes.user}>{user.name}</li>)
         )
         }
        </ul>
    )
}
export default User