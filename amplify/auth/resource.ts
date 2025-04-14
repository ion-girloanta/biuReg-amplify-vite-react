import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: true,
  },
  multifactor: {
    mode: 'REQUIRED',
    sms: true,
    totp: true,
  },  
  userAttributes: {
    phoneNumber: { 
      required: true,
      //dialCode: '+972'
    }
  }

});
