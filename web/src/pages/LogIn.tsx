import { useState } from 'react'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import { Form } from '@unform/web'

import Input from '../components/Input'
import { ContainerLogIn } from './../styles/pages/StyledLogIn'

function LogIn() {
  const [user, setUser] = useState('')

  function handleLogInGitHub() {
    axios.post('/api/authgithub', { user })
  }
  return (
    <ContainerLogIn>
      <div className="banner">
        <img src="/iconlogo.svg" alt="MoveIt" />
      </div>
      <div className="login">
        <img src="/logo-full-white.svg" alt="MoveIt" />
        <strong>Bem-vindo</strong>
        <p>
          <FaGithub />
          Faça login com o seu Github para começar
        </p>
        <Form className="authgit" onSubmit={handleLogInGitHub}>
          <Input
            name="user"
            type="text"
            placeholder="Digite seu username"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <button type="submit">
            <FaArrowRight />
          </button>
        </Form>
      </div>
    </ContainerLogIn>
  )
}
export default LogIn
