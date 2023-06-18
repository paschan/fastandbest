import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translation:{
                'Sign Up'    : 'Sign Up',
                'Username' : 'Username',
                'Email' :'Email',
                'Password' : 'Password',
                'Password Repeat' : 'Password Repeat'
            }
        },
        tr:{
            translation:{
                'Sign Up' : 'Kayit Ol',
                'Username' : 'Kullanici Adi',
                'Email' : 'Email',
                'Password' : 'Sifre',
                'Password Repeat' : 'Sifre Tekrar'
            }
        }
    },
    fallbackLng:'en',
    ns:['translation'],
    defaultNS : 'translation',
    keySeparator : false,
    interpolation:{
        escapeValue:false,
        formatSeparator: ','
    },
    react:{
        wait:true
    }
})

export default i18n;