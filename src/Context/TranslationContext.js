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
          "Web Hosting" : "Web Hosting",
          "For small to medium websites." : "For small to medium websites.",
          "Cloud hosting" : "Cloud hosting",
          "For large scale projects." : "For large scale projects.",
          "WordPress Hosting" : "WordPress Hosting",
          "Optimized solution for WordPress hosting." : "Optimized solution for WordPress hosting.",
          "VPS Hosting" : "VPS Hosting",
          "dedicated resources to scale." : "dedicated resources to scale.",
          "CyberPanel Hosting" : "CyberPanel Hosting",
          "Control panel with Open/LiteSpeed Webserver." : "Control panel with Open/LiteSpeed Webserver.",
          "Minecraft Server Hosting" : "Minecraft Server Hosting",
          "Share your Minecraft experience." : "Share your Minecraft experience.",
          "Google Workspace Email Hosting" : "Google Workspace Email Hosting",
          "Get custom email and 30GB of storage." : "Get custom email and 30GB of storage.",
          "Hostinger Email Hosting" : "Hostinger Email Hosting",
          "Promote your business with every outreach." : "Promote your business with every outreach.",
          "Domain Name Search" : "Domain Name Search",
          "money" : "₹",
          "permonth" : "/mo",
          "currency" : "149.00",
          "Find the perfect domain name." : "Find the perfect domain name.",
          "WHOIS Lookup" : "WHOIS Lookup",
          "Lookup tool for find WHOIS information." : "Lookup tool for find WHOIS information.",
          "Domain Transfer" : "Domain Transfer",
          "Want to transfer domain to Hostinger?" : "Want to transfer domain to Hostinger?",
          "home" : "Home",
          "logintext" : "Log In",
          "or" : "or",
          "password" : "Password",
          "forgotpassword" : "Forgot password"
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
          "Web Hosting" : "Hébergement Web",
          "For small to medium websites." : "Pour les petits et moyens sites Web.",
          "Cloud hosting" : "Hébergement cloud",
          "For large scale projects." : "Pour les projets à grande échelle.",
          "WordPress Hosting" : "Hébergement WordPress",
          "Optimized solution for WordPress hosting." : "Solution optimisée pour l'hébergement WordPress.",
          "VPS Hosting" : "Hébergement VPS",
          "dedicated resources to scale." : "ressources dédiées à l'échelle.",
          "CyberPanel Hosting" : "Hébergement CyberPanel",
          "Control panel with Open/LiteSpeed Webserver." : "Panneau de configuration avec Open/LiteSpeed ​​Webserver.",
          "Minecraft Server Hosting" : "Hébergement de serveur Minecraft",
          "Share your Minecraft experience." : "Partagez votre expérience Minecraft.",
          "Google Workspace Email Hosting" : "Hébergement Google",
          "Get custom email and 30GB of storage." : "Obtenez un e-mail personnalisé",
          "Hostinger Email Hosting" : "Hébergement de Hostinger",
          "Promote your business with every outreach." : "Faites la chaque campagne",
          "Domain Name Search" : "Recherche de nom de domaine",
          "money" : "",
          "permonth" : "€/mois",
          "currency" : "1.86",
          "Find the perfect domain name." : "Trouvez le nom de domaine parfait.",
          "WHOIS Lookup" : "Recherche WHOIS",
          "Lookup tool for find WHOIS information." : "Outil de recherche pour trouver des informations WHOIS.",
          "Domain Transfer" : "Transfert de domaine",
          "Want to transfer domain to Hostinger?" : "Voulez-vous transférer le domaine vers Hostinger ?",
          "home" : "Maison",
          "logintext" : "Se connecter",
          "or" : "ou",
          "password" : "Mot de passe",
          "forgotpassword" : "Mot de passe oublié",

        }
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
    const forgotpassword = t("forgotpassword")




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
            }
        }
        >
            {children}
        </TranslationContext.Provider>
    )
}

export default TranslationContext;