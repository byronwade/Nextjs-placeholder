//import React, { useState } from 'react';
import {Button} from '@primer/react'

import DarkMode from '../components/darkMode'


export default function Home() {
	return (
		<>
			<DarkMode />
			<div>
				<p className="h0-mktg">This is heading 0</p>
				<Button>Home</Button>
			</div>
		</>
	);
}
