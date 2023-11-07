import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Ahorre tiempo, ahorre dinero!</h1>
      <span className="mailDesc">Regístrate y te enviaremos las mejores ofertas</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Su correo" />
        <button>Subscribete</button>
      </div>
    </div>
  )
}

export default MailList