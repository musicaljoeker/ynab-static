import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
    import { Button, Form } from 'semantic-ui-react'
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/app/budget`)
    }
    return (
      <>
        <Form onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/budget`)
          }}>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" type="text" name="username" onChange={this.handleUpdate} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password" type="password"  name="password" onChange={this.handleUpdate}
            />
          </Form.Field>
          <Button type='submit'>Login</Button>
        </Form>
      </>
    )
  }
}
export default Login
