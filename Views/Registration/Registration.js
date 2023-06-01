import { React } from 'react';
import { StyleSheet, View } from 'react-native';
// https://www.npmjs.com/package/react-spinners-kit-upd
import { SwapSpinner } from "react-spinners-kit";
// https://formik.org/docs/overview
import { useFormik } from 'formik';
import { Form, Icon, Button, Container, Grid, Divider, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as yup from 'yup';

const Registration = () => {

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        // actions.resetForm();
        await new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    }

    const registerationSchema = yup.object().shape({
        username: yup.string().min(8).required('required'),
        email: yup.string().email('invalid email').required('required'),
        password: yup.string().min(6).matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/, {message: 'invalid password'}).required('required'),
        confirm_password: yup.string().oneOf([yup.ref('password'), null ], 'password does not match').required('required'),
        terms: yup.boolean().oneOf([true], ' ').required('required'),
    });

    const {values, handleBlur, handleChange, touched, handleSubmit, errors, isSubmitting} = useFormik({
        initialValues: {
            username: 'TestingUsername', email: 'TestingUsername@gmail.com', password: 'Test@2', confirm_password: 'Test@2', terms: 'true'
        },
        validationSchema: registerationSchema,
        onSubmit,

    });

    console.log(errors)

    return (
        <Container>

            <Divider horizontal>
                <Header as='h4'>Registration</Header>
            </Divider>

            <Form onSubmit={handleSubmit} autoComplete='off' noValidate>

                <Form.Input 
                    name='username' id='username' value={values.username} 
                    label={'Username '+(errors.username && touched.username ? errors.username.replace('username','') : '')} 
                    placeholder='Username' onChange={handleChange} onBlur={handleBlur} required 
                    className={errors.username && touched.username ? 'error field' : ''}
                />

                <Form.Input 
                    name='email' id='email' value={values.email} 
                    label={'Email '+(errors.email && touched.email ? errors.email.replace('email','') : '')} 
                    placeholder='Email' onChange={handleChange} onBlur={handleBlur} required 
                    className={errors.email && touched.email ? 'error field' : ''}
                />

                <Form.Input 
                    name='password' id='password' type='password' values={values.password} 
                    label={'Password '+(errors.password && touched.password ? errors.password.replace('password','') : '')} 
                    placeholder='Password' onChange={handleChange} onBlur={handleBlur} required 
                    className={errors.password && touched.password ? 'error field' : ''}
                />

                <Form.Input 
                    name='confirm_password' id='confirm_password' type='password' values={values.confirm_password} 
                    label={'Confirm Password '+(errors.confirm_password && touched.confirm_password ? errors.confirm_password.replace('confirm_password','') : '')} 
                    placeholder='Confirm Password' onChange={handleChange} onBlur={handleBlur} required 
                    className={errors.confirm_password && touched.confirm_password ? 'error field' : ''}
                />

                <Form.Checkbox 
                    name='terms' id='terms' 
                    label={'I agree to the Terms and Conditions '+(errors.terms && touched.terms ? errors.terms.replace('terms','') : '')} 
                    onChange={handleChange} onBlur={handleBlur} required 
                    className={errors.terms && touched.terms ? 'error field' : ''}
                />
                
                <Button type='submit' primary animated='fade' disabled={isSubmitting}>
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>Register <Icon name='check' /> </Button.Content>
                </Button>

            </Form>

        </Container>
    );

}
  
export default Registration