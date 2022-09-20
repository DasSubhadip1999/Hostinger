import { createContext, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { englishLangData, frenchLangData} from "../Data/languageData"

const TranslationContext = createContext();

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: englishLangData
      },
      fr: {
        translation: frenchLangData
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export const TranslationProvider = ({children}) => {
    const { t } = useTranslation();
    const cMH = t("campaign_main_heading");
    const cSH = t("campaign_sub_heading");
    const cBT = t("campaign_btn_text");
    const cST = t("campaign_sub_text");
    const lng = t("ln");
    const hostingText = t("Hosting");
    const login = t("login");
    const cart = t("cart");
    const day = t("day");
    const hour = t("hour");
    const minute = t("minute");
    const second = t("second");
    const moneySign = t("money");
    const perMonth = t("permonth");
    const currency = t("currency");
    const home = t("home");
    const loginText = t("logintext");
    const orText = t("or");
    const password = t("password");
    const forgotpassword = t("forgotpassword");
    const allInOne = t("all_in_one");
    const allInOneSubText = t("allInOneSubText");
    const bWH = t("bWH");
    const renew = t("renewCharge");
    const selectText = t("selectText");
    const sAF = t("sAF");
    const seeLess = t("seeLess");
    const oSI = t("oSI");
    const findDomainName = t("findDomainName");
    const domainSubText = t("domainSubText");
    const domainInputPlaceholder = t("domainInputPlaceholder");
    const searchText = t("searchText")

    //show lan option onclick
    const [islanClick, setIsLanClick] = useState(false);
    const showLanOption = () => {
      setIsLanClick( prev => !prev)
    }


    //set language on click
    const [lan, setLan] = useState({
      img : "https://countryflagsapi.com/png/in",
      text : "English"
    })

    const setLanguage = (img, text, lanCode) => {
        setLan({img,text})
        setIsLanClick(prev => !prev);
        i18n.changeLanguage(lanCode);

        localStorage.setItem("languagedetail", JSON.stringify({language: lanCode, imgUrl : img, languageName : text}))
    }




    return (
        <TranslationContext.Provider
        value={
            {
                cMH,
                cSH,
                cBT,
                cST,
                lng,
                hostingText,
                t,
                login,
                cart,
                day,
                hour,
                minute,
                second,
                moneySign,
                perMonth,
                currency,
                home,
                loginText,
                orText,
                password,
                forgotpassword,
                allInOne,
                allInOneSubText,
                bWH,
                renew,
                setLanguage,
                lan,
                islanClick,
                showLanOption,
                i18n,
                setLan,
                selectText,
                sAF,
                seeLess,
                oSI,
                findDomainName,
                domainSubText,
                domainInputPlaceholder,
                searchText,
            }
        }
        >
            {children}
        </TranslationContext.Provider>
    )
}

export default TranslationContext;