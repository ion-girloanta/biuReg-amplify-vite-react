import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { appTheme } from './theme';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react'; //import AmplifyUI from amplify ui-react;
import '@aws-amplify/ui-react/styles.css'; //import AmplifyUI styleSheet from amplify ui-react;
import { View, Image, Text, useTheme, ThemeProvider} from '@aws-amplify/ui-react';
import I18n from './i18n';


const formFields = {
  signIn: {
    username: {
      dialCode: '+972',
      label: I18n.get('Email or Phone'),
      isRequired: true,
      placeholder: I18n.get('Enter your email or phone'),
      type: 'default',
    },
  },
  signUp: {
    phone_number: {
      dialCode: '+972'
    },
  },
}
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          //src="https://docs.amplify.aws/assets/logo-dark.svg"
          src="https://israelxp.com/wp-content/uploads/2020/11/logo-bar-ilan-university.png"
          width="50%"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy;  {I18n.get('Copyright')}
        </Text>
      </View>
    );
  },
};


Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
      <Authenticator  formFields={formFields} components={components}>
        <App />
      </Authenticator>
  </React.StrictMode>);
