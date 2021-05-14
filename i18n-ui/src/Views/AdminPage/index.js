import React from 'react'
import AdminTable from "./table";
import {useTranslation} from 'react-i18next';
import {LanguageHeader, NavTitleHeader} from "../../components";
import ReplyIcon from "@material-ui/icons/Reply";


export default function AdminPage() {

	const [t] = useTranslation();
	return (
		<div>
			<LanguageHeader/>

			<NavTitleHeader title={t('sample.title')}
							leftLink={{title: t("admin.mainPage"), route: "/", icon: <ReplyIcon/>}}
			/>

			<AdminTable/>
		</div>)
}


