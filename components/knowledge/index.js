import './index.css'
function Knowledge(props) {
   let index = 0;
   return (
    <section className='wrapper'>
      <h1 className="header">Knowledge</h1>
      <ul className="list"> 
        {
          props.objects.map( (item) => {
            return <li
            className='element' 
            key={item}
            style={{color:props.colors[index++]}}
            >I know: {item}</li>
          })
        } 
      </ul>
    </section>
  )
}
  
export default Knowledge;
  