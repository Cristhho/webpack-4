import React, { useState } from 'react';

import data from './data.json';
import Loader from './Loader';
import logo from '../../img/platzi.png'
import video from '../../video/que-es-core.mp4'

const App = () => {
	const [loaders, setLoaders] = useState([]);

	const handleClick = () => {
		setLoaders(data.loaders);
	}

	return(
		<div>
			<h1>Aplicación hecha en React.js</h1>
			<video src={video} width={360} controls poster={logo}></video>
			<p>
        <img src={logo} alt="" width={40}/>
      </p>
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