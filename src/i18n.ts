import { I18n } from 'aws-amplify/utils';

// Define translations
I18n.putVocabularies({
  en: {
    'Sign In': 'Sign In',
    'Sign Up': 'Sign Up',
    'Sign Out': 'Sign Out',
    'Forgot your password?': 'Forgot your password?',
    'Reset your password': 'Reset your password',
    'Send code': 'Send Code',
    'Confirm Sign Up': 'Confirm Sign Up',
    'Confirm Password': 'Confirm Password',
    'Back to Sign In': 'Back to Sign In',
    'Email': 'Email',
    'Username': 'Username',
    'Password': 'Password',
    'New password': 'New password',
    'Change Language': 'Change Language',
    'Welcome': 'Welcome to Bar-Ilan University',
  },
  he: {
    'Sign In': 'התחברות',
    'Sign Up': 'הרשמה',
    'Sign Out': 'התנתקות',
    'Forgot your password?': 'שכחת סיסמה?',
    'Reset your password': 'איפוס סיסמה',
    'Send code': 'שלח קוד',
    'Confirm Sign Up': 'אישור הרשמה',
    'Confirm Password': 'אישור סיסמה',
    'Back to Sign In': 'חזרה למסך התחברות',
    'Email': 'אימייל',
    'Username': 'שם משתמש',
    'Password': 'סיסמה',
    'New password': 'סיסמה חדשה',
    'Change Language': 'שנה שפה',
    'Welcome': 'ברוכים הבאים לאוניברסיטת בר-אילן',
  },
});

// Set default language (optional override)
I18n.setLanguage('he');

export default I18n;