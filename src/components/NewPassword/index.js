import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPassword'

class NewPassword extends Component {
  state = {
    passWordsList: [],
    passwordCount: 0,
    inputWebsite: '',
    inputUserName: '',
    inputPassword: '',
    searchInput: '',
  }

  onAddPassword = event => {
    event.preventDefault()
    const {inputWebsite, inputUserName, inputPassword} = this.state
    const newUserPassword = {
      id: uuidv4(),
      website: inputWebsite,
      username: inputUserName,
      password: inputPassword,
      checkBoxClick: false,
    }

    this.setState(prevState => ({
      passWordsList: [...prevState.passWordsList, newUserPassword],
      passwordCount: prevState.passwordCount + 1,
      inputWebsite: '',
      inputUserName: '',
      inputPassword: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({inputUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
    console.log(event.target.value)
  }

  onDeleteUserFromList = id => {
    const {passWordsList} = this.state
    const filteredPasswords = passWordsList.filter(each => each.id !== id)

    this.setState(prevState => ({
      passwordCount: prevState.passwordCount - 1,
      passWordsList: filteredPasswords,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  OnClickCheckBox = () => {
    this.setState(prevState => ({
      passWordsList: prevState.passWordsList.map(eachPasswordList => {
        return {
          ...eachPasswordList,
          checkBoxClick: !eachPasswordList.checkBoxClick,
        }
      }),
    }))

    // this.setState(prevState => ({checkBoxClick: !prevState.checkBoxClick}))
  }

  render() {
    const {passWordsList, passwordCount, searchInput, checkBoxClick} =
      this.state

    const searchResults = passWordsList.filter(eachUser =>
      eachUser.username.toUpperCase().includes(searchInput.toUpperCase()),
    )
    return (
      <div className='bg-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
          alt='app logo'
          className='app-logo'
        />
        <div className='new-password-container'>
          <form className='form-container' onSubmit={this.onAddPassword}>
            <h1 className='form-heading'>Add New Password</h1>
            <div className='input-element-logos-container'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                alt='website'
                className='Website-logo'
              />
              <hr className='horizontal-line' />
              <input
                type='text'
                className='input-text-element'
                placeholder='Enter Website'
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className='input-element-logos-container'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                alt='username'
                className='Website-logo'
              />
              <hr className='horizontal-line' />
              <input
                type='text'
                className='input-text-element'
                placeholder='Enter Username'
                onChange={this.onChangeUserName}
              />
            </div>
            <div className='input-element-logos-container'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                alt='password'
                className='Website-logo'
              />
              <hr className='horizontal-line' />
              <input
                type='password'
                className='input-text-element'
                placeholder='Enter Password'
                onChange={this.onChangePassword}
              />
            </div>
            <button className='add-button' type='submit'>
              Add
            </button>
          </form>
          <img
            src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
            alt='password manager'
            className='password-manager-image'
          />
        </div>
        <div className='your-password-container'>
          <div className='your-password-top-container'>
            <div className='heading-paragraph'>
              <h1 className='form-heading'>Your Passwords</h1>
              <p className='password-count-styling'>{passwordCount}</p>
            </div>
            <div className='search-input-image-container'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                alt='search'
              />
              <input
                type='search'
                className='search-element'
                placeholder='search'
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className='line' />
          <div className='checkbox-label-container'>
            <input
              type='checkbox'
              id='checkbox'
              className='checkbox-element'
              onChange={this.OnClickCheckBox}
            />
            <label htmlFor='checkbox' className='label-element'>
              Show Passwords
            </label>
          </div>
          <div className='no-password-image'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
              alt='no passwords'
              className='no-password-image'
            />
            <p className='no-password-para'>No Passwords</p>
          </div>

          <ul className='password-container-unorder-list'>
            {searchResults.map(eachPassword => (
              <YourPassword
                eachPassword={eachPassword}
                key={eachPassword.id}
                onDeleteUserFromList={this.onDeleteUserFromList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default NewPassword
