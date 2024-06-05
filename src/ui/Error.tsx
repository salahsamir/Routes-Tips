

interface IAlerts {
  message: string

}
function Error({ message}: IAlerts) {
  return (
    <>
      <div className="text-red-500 text-sm "> {message}</div>
    </>
  )
}

export default Error