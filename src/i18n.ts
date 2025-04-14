import { I18n } from 'aws-amplify/utils';

// Define translations
I18n.putVocabularies({
  en: {
    'Sign In': 'Sign In',
    'Sign in': 'Sign in',
    'Sign Up': 'Sign Up',
    'Sign Out': 'Sign Out',
    'Create Account': 'Create Account',
    'Forgot your password?': 'Forgot your password?',
    'Reset your password': 'Reset your password',
    'Reset Password': 'Reset Password',
    'Send code': 'Send Code',
    'Confirm Sign Up': 'Confirm Sign Up',
    'Confirm': 'Confirm',
    'Confirm SMS Code': 'Confirm SMS Code',
    'Confirm Password': 'Confirm Password',
    'Back to Sign In': 'Back to Sign In',
    'Email': 'Email',
    'Email or Phone': 'Email or Phone',
    'Enter your email': 'Enter your email',
    'Username': 'Username',
    'Password': 'Password',
    'New password': 'New password',
    'Change Language': 'Change Language',
    'Welcome': 'Welcome to Bar-Ilan University',
    'Copyright': '2025 Bar-Ilan University. All rights reserved.',
    'Lang': 'en',
  },
  he: {
    'Lang': 'he',
    'Sign In': 'התחברות',
    'Sign in': 'התחברות',
    'Sign Up': 'הרשמה',
    'Sign Out': 'התנתקות',
    'Create Account': 'צור חשבון',
    'Forgot your password?': 'שכחת סיסמה?',
    'Reset your password': 'איפוס סיסמה',
    'Reset Password': 'איפוס סיסמה',
    'Send code': 'שלח קוד',
    'Confirm SMS Code': 'אישור קוד',
    'Confirm Sign Up': 'אישור הרשמה',
    'Confirm': 'אישור',
    'Confirm Password': 'אישור סיסמה',
    'Back to Sign In': 'חזרה למסך התחברות',
    'Email': 'אימייל',
    'Email or Phone': 'אימייל או טלפון',
    'Enter your email': 'הכנס אימייל',
    'Username': 'שם משתמש',
    'Password': 'סיסמה',
    'New password': 'סיסמה חדשה',
    'Change Language': 'שנה שפה',
    'Welcome': 'ברוכים הבאים לאוניברסיטת בר-אילן',
    'Copyright': '2025 אוניברסיטת בר-אילן. כל הזכויות שמורות.',
  },
});

// Set default language (optional override)
I18n.setLanguage('he');

export default I18n;