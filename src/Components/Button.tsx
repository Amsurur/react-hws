
interface IProps{
    text:string
    action:()=>void
}






const Button = ({text,action}:IProps) => {
  return (
    <div><button onClick={()=>action()}>{text}</button></div>
  )
}

export default Button