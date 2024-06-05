interface IBall extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   bgColor:string

}
function Ball({bgColor,...rest}: IBall) {
  return (
    <div className=" w-6 h-6 rounded-full" style={{backgroundColor:bgColor}} {...rest} ></div>
  )
}

export default Ball