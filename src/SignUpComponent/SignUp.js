import CoolButton from '../CoolButton/CoolButton';
import FormField from '../formfield/FormField'

function SignUpPage() {
    return (
        <div className="my-card-content">
            <h1>Please sign up to get started</h1>
            <FormField label="name" type="text" placeholder="type your name" />
            <FormField label="email" type="text" placeholder="type your email" />
            <FormField label="password" type="password" placeholder="password" />

            <CoolButton isSmall name="name" >Name</CoolButton>

        </div>

    )
}

export default SignUpPage;

