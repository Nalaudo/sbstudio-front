'use client'
import React, { useState } from 'react'

const PassAndEyeStates = () => {
  const [passwordType, setPasswordType] = useState<string>('password')
  const [eyeClasses, setEyeClasses] = useState('far fa-eye')

  const SET_CLASSES = {
    password: () => {
      setEyeClasses('far fa-eye-slash')
      setPasswordType('text')
    },
    text: () => {
      setEyeClasses('far fa-eye')
      setPasswordType('password')
    }
  }

  const DEFAULT_CLASSES = () => {
    setEyeClasses('far fa-eye-slash')
    setPasswordType('password')
  }

  const handleSeePassword = SET_CLASSES[passwordType as keyof typeof SET_CLASSES] || DEFAULT_CLASSES

  return {
    passwordType,
    eyeClasses,
    handleSeePassword
  }
}

interface Styles {
  [key: string]: string
}

interface PasswordInputProps {
  props: {
    styles: Styles
    placeholder: string
    id: string
  }
}

const PasswordInput: React.FC<PasswordInputProps> = ({ props: { styles, placeholder, id } }) => {
  const { passwordType, handleSeePassword, eyeClasses } = PassAndEyeStates()
  return (
    <>
      <i className={styles.authFormIcon + ' fas fa-lock'} />
      <input type={passwordType} className={styles.authFormInput} placeholder={placeholder} id={id} />
      <i onClick={handleSeePassword} className={eyeClasses + ' ' + styles.passwordEye} id='togglePassword' />
    </>
  )
}
export default PasswordInput
