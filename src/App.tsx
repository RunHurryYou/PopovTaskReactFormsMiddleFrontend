import './App.css'
import { SignUp } from './components/SignUp/SignUp'
import { SignIn } from './components/SignIn/SignIn'
import type { FormsReturnType } from './types/logic.types'
function App() {
  const onSubmit = (data: FormsReturnType) => {
    console.log(data)
  }

  return (
    <>
      <h1>Sign In</h1>
      <SignIn
        onSubmit={onSubmit}
      />
      <h1>Sign Up</h1>
      <SignUp
        onSubmit={onSubmit}
      />
    </>
  )
}

export default App
