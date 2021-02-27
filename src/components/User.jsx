import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const userStore = useSelector(store => store.userReducer)
  console.log(userStore)

  const user = useMemo(() => {
    return userStore.user || {
      name: 'tên mặc định'
    }
  }, [userStore])

  return (
    <>
      <h2>user name: {user.name}</h2>
    </>
  )
}

export default User
