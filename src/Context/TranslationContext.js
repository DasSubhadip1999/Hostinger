import { createContext } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const TranslationContext = createContext();

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "campaign_main_heading" : "Savings to Set Your Website in Motion",
          "campaign_sub_heading" : "Make moves with a free domain and SSL included with a four-year subscription.",
          "campaign_btn_text" : "get started",
          "campaign_sub_text" : "Get exclusive 30-day money-back guarantee",
          "ln" : "English",
          "Hosting" : "Hosting",
          "Domain" : "Domain",
          "login" : "Log In",
          "cart" : "Cart",
          "day" : "days",
          "hour" : "hours",
          "minute" : "minutes",
          "second" : "seconds",
        }
      },
      fr: {
        translation: {
          "campaign_main_heading" : "Économisez et lancer votre site Web",
          "campaign_sub_heading" : "Faites bouger les choses avec un domaine gratuit et un SSL inclus dans un abonnement annuel.",
          "campaign_btn_text" : "Commencez",
          "campaign_sub_text" : "Garantie de remboursement de 30 jours",
          "ln" : "Français",
          "Hosting" : "Hébergement",
          "Domain" : "Nom de domaine",
          "login" : "Connexion",
          "cart" : "Panier",
          "day" : "jour(s)",
          "hour" : "heure(s)",
          "minute" : "minute(s)",
          "second" : "seconde(s)",
        }
      },
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
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
    const second = t("second")




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
                second
            }
        }
        >
            {children}
        </TranslationContext.Provider>
    )
}

export default TranslationContext;