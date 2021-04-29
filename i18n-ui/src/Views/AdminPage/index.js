import React from 'react'
import AdminTable from "./table";
import {useTranslation} from 'react-i18next';
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom'
import ReplyIcon from '@material-ui/icons/Reply';


export default function AdminPage() {

	const [t] = useTranslation();
	return (
		<div>
			<div style={{
				display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				<div style={{display: 'flex', width: '15%',}}>
					<Button variant="contained" startIcon={<ReplyIcon/>}>
						<Link to="/">{t('admin.mainPage')}</Link>
					</Button>
				</div>
				<div style={{display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'space-around'}}>
					<h1>{t('sample.title')}</h1>
				</div>
				<div style={{display: 'flex', width: '15%', justifyContent: 'space-around'}}>

				</div>
			</div>
			<AdminTable/>
		</div>)
}


