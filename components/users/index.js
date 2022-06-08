import './index.css'
function Users(props) {
    // let index = props.colors.length;
    let length = props.colors.length;
  
    // let index = 0;
    return (
     <section className='wrapper' >
       <h1 className="header">Users</h1>
       <ul>
         {
           props.users.map( (item) => {
          //  if (index <= 0) index = props.colors.length; 
             return <li 
             className='element' 
             key= {item}
            //  style={{color:props.colors[--index]}}
            // >Hello, {props.colors[index]}{index} {item}</li>
             style={{color:props.colors[Math.floor(Math.random() * length)]}}
            >Hello,{item}</li>
           })
         }
       </ul>
     </section>
   )
 }
  
 export default Users;
   