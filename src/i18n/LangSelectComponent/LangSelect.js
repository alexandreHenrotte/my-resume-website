import React from 'react';
import Cookies from 'universal-cookie';
import i18n from "i18next";
import { Language } from '../Language';
import './LangSelect.css';
const cookies = new Cookies();

export default class LangSelect extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedLanguage: Language.FR,
            folded: true
        }
    }

    changeLanguage = (language) => {
        switch (language) {
            case Language.FR:
                i18n.changeLanguage(Language.FR);
                cookies.set('lang', Language.FR, { path: '/', expires: new Date(Date.now()+259200)});
                break;
            case Language.EN:
                i18n.changeLanguage(Language.EN);
                cookies.set('lang', Language.EN, { path: '/', expires: new Date(Date.now()+259200)});
                break;
            default:
                break;
        }

        this.props.action();
    }

    render() {
        return (
            <div id="lang-select">
                <div className="flag-container" onClick={() => this.changeLanguage(Language.FR)}>
                    <img src={process.env.PUBLIC_URL + "/icons/flags/france.png"} alt="French flag"></img>
                </div>
                <div className="flag-container" onClick={() => this.changeLanguage(Language.EN)}>
                    <img src={process.env.PUBLIC_URL + "/icons/flags/united-kingdom.png"} alt="UK flag"></img>
                </div>
                    {/*<select name="language" onChange={this.changeLanguage}>
                        <option value={Language.FR}>FR</option>
                        <option value={Language.EN}>EN</option>
                    </select>*/}
            </div>
        )
    }
}