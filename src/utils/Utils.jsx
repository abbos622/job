import "./Utils.scss"

const Utils = () => {
  return (
    <div>Utils</div>
  )
}

const Container = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

const Linee = () => {
  return(
    <div className="line"> </div>
  )
}

export  {Utils, Container, Linee}