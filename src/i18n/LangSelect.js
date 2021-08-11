import React from 'react';
import i18n from "i18next";
import { Language } from './Language';


export default class LangSelect extends React.Component {

    changeLanguage = (event) => {
        let language = event.target.value;
        switch (language) {
            case Language.EN:
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
                i18n.changeLanguage(Language.FR);
                break;
            default:
                break;
        }

        this.props.action();
    }

    render() {
        return (
            <div>
                <div>
                    <select name="language" onChange={this.changeLanguage}>
                        <option value={Language.FR}>FR</option>
                        <option value={Language.EN}>EN</option>
                    </select>
                </div>
            </div>
        )
    }
}