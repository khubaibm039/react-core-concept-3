import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm';

// import HookForm from './components/HookForm/HookForm'
// import Refform from './components/Refform/Refform'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import Simpleform from './components/Simpleform/Simpleform'

function App() {


    const handleSignupSubmit = (data) => {
        console.log('sign up data:', data);
    }

    const handleUpdateProfile = (data) => {
        console.log('sign up data:', data);
    }

    return (
        <>
            {/* <Simpleform></Simpleform> */}
            {/* <StateFullForm></StateFullForm> */}
            {/* <Refform></Refform> */}
            {/* <HookForm></HookForm> */}
            <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignupSubmit}>
                <div>
                    <h2>Sign up</h2>
                    <p>please sign up right now</p>
                </div>
            </ReusableForm>
            <ReusableForm formTitle={'Profile update'} submitBtnText='update' handleSubmit={handleUpdateProfile}>
                <div>
                    <h2>Update profile</h2>
                    <p>always keep your profile update</p>
                </div>
            </ReusableForm>
        </>
    )
}

export default App
