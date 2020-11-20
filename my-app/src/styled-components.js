import styled from 'styled-components';

export const WholeApp = styled.div`
    background-color: #242943;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1);
    color: #ffffff;
`;

export const SignUpPage = styled.div`
    background-color: #242943;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: .7%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1);
    margin: 2%;
    margin-top: 15%;
    margin-bottom: 25%;

    h1 {
        font-size: 45pt;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }

    .sign-up-form {
        color: #ffffff;
    }

    #home {
        text-decoration: none;
        color: #ffffff;
        padding-left: 42rem;
        font-size: 12pt;
    }

    #loginForm {
        text-decoration: none;
        color: #ffffff;
        padding-left: 1rem;
        font-size: 12pt;
    }

    .signUp-username {
        padding-top: 25px;
        padding-bottom: 20px;
    }

    .signUp-email {
        padding-bottom: 20px;
        padding-left: 50px;
    }

    .signUp-password {
        padding-bottom: 25px; 
    }

    #submitBtn {
        font-size: 16pt;
        background-color: ; 
        color: #ffffff;
    }

    .back-to-login {
        padding-top: 60px;
        font-size: 12pt;
    }

    #backLoginBtn {
        font-size: 12pt;
        background-color: ;
    }
`;

export const Login = styled.div`
    background-color: #242943;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: .7%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1);
    margin: 2%;
    margin-bottom: 5%;
    margin-top: 15%;

    h1 {
        font-size: 45pt;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }

    .login-form {
        color: #ffffff;
      }

    #home {
        text-decoration: none;
        color: #ffffff;
        padding-left: 40rem;
        font-size: 12pt;
    }

    #signUp {
        text-decoration: none;
        color: #ffffff;
        padding-left: 1rem;
        font-size: 12pt;
    }

    .login-username {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .loginBtn {
        padding-top: 25px;
    }

    #submitBtn {
        font-size: 19pt;
    }
    
    .back-to-signUp {
        padding-top: 90px;
        font-size: 12pt;
    }

    #signUpBtn {
        font-size: 12pt;
        
    }

`;

export const Nav = styled.div`
    #home {
        text-decoration: none;
        color: #ffffff; 
    }

    #form {
        text-decoration: none;
        color: #ffffff; 
    }

    #guest {
        text-decoration: none;
        color: #ffffff;
    }
`;

export const FormPage = styled.div`
    html {
        background-color: #242943;
    }

    .form {
       
    }

`;