import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../store/viewer/viewerSlice'

const useAuth = (formData = {}) => {
  const [data, setData] = useState(formData)
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    email: 'hello@test.com',
    password: '123456'
  })
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = data

    if (email === user.email && password === user.password) {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)

      dispatch(setAuth(email))

      setData({ email: '', password: '' })
      setErrors({})
    } else {
      setErrors({ error: 'Invalid email or password :(' })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
  }

  return {
    ...data,
    data,
    handleChange,
    handleSubmit,
    handleLogout,
    errors
  }
}

export default useAuth
