import React, {Component} from "react";
import {changeLanguage, locales} from "../../language/i18n";

/**
 * Language selector with flags
 * To add a new locale, e.g. lo:
 * - add its SVG icon (lo.svg) to static/flags
 * - add its code (lo) to locales in i18n.js
 * - add translations with locale=lo in DB
 */
class LanguageHeader extends Component {
	render() {
		return (
			<div style={{display: 'block', width: '100%', textAlign: "center"}}>
				{Object.entries(locales).map((localeKVPair) => {
					let loc = localeKVPair[1];
					return <span className={"flag-icon"} onClick={() => changeLanguage(loc)}
								 style={{ backgroundImage: `url(/flags/${loc}.svg)` }}
								 title={loc.toUpperCase()}>&nbsp;</span>;
				})}
			</div>
		)
	}
}

export default LanguageHeader;
