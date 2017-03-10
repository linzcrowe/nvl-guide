import { browserHistory } from 'react-router';

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    onSubmitHook: (err, state) => {
      if (!err &&
          state == 'signIn' ||
          state == 'signUp') {
        browserHistory.push('/results');
      }
    },
    //preSignUpHook: myPreSubmitFunc,
    //postSignUpHook: 

    // Texts
    texts: {
      termsPreamble: "By creating an account, you agree to our",
      signUpLink_pre: "Don't have an account yet?",
      signUpLink_link: "Register",
      button: {
          signUp: "Sign Up Now!"
      },
      socialSignUp: "Sign Up",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password",
          signIn: "",
      },
    },
});