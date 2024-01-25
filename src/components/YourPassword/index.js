import './index.css'

const YourPassword = props => {
  const {eachPassword, onDeleteUserFromList} = props
  const {website, username, password, checkBoxClick, id} = eachPassword

  const onDeletePassword = () => {
    onDeleteUserFromList(id)
  }

  const onShoWpassword = () => {
    if (checkBoxClick) {
      return <p>{password}</p>
    } else {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
          className="stars-image"
        />
      )
    }
  }

  return (
    <li className="password-container">
      <p className="first-letter">{website[0]}</p>
      <div className="encrypted-password-container">
        <p className="website-name">{website}</p>
        <p className="username">{username}</p>
        {onShoWpassword()}
      </div>
      <button type="button" data-testid="delete" onClick={onDeletePassword}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default YourPassword
