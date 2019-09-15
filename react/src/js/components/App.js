import React, { useState } from 'react';

import data from './data.json';
import Loader from './Loader';

const App = () => {
	const [loaders, setLoaders] = useState([]);

	const handleClick = () => {
		setLoaders(data.loaders);
	}

	return(
		<div>
			<button onClick={handleClick}>Mostrar lista</button>
			<ul>
				{
					loaders.map(loader => {
						return(
							<Loader {...loader} key={loader.id}/>
						)
					})
				}
			</ul>
		</div>
	)
}

export default App;