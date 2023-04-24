import React from 'react'

interface Styles {
  [key: string]: string
}

interface UsernameInputProps {
  styles: Styles
}

const UsernameInput: React.FC<UsernameInputProps> = ({ styles }) => {
  return (
    <>
      <i className={styles.authFormIcon + ' fas fa-user'} />
      <input type='text' className={styles.authFormInput} placeholder='Usuario / Email' />
    </>
  )
}
export default UsernameInput
