import Quote from './Quote'

const Condition=(props)=>{
    let text=''
    if (props.userBirthday !== 366 && props.userBirthday >1) {
       text=`${props.userBirthday} days left untill your birthday ${props.username}`;
    } else if (props.userBirthday <= 1) {
       text=`Just One day left untill your birthday ${props.username}`;
    } else {
        //if today is birthday
       text=`Happy Birthday ${props.username}`;
    }

    return(
    <div>
        <h1>{text}</h1>
        <Quote userBirthday={props.userBirthday}/>
       
    </div>
    )
}

export default Condition