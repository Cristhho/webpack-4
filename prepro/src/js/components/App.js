import React, { useState } from 'react';

import data from './data.json';
import Loader from './Loader';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

const App = () => {
	const [loaders, setLoaders] = useState([]);

	const handleClick = () => {
		setLoaders(data.loaders);
	}

	return(
		<div>
			<p className="sass">Esto es sass</p>
			<p className="less">Esto es less</p>
			<p className="stylus">Esto es stylus</p>
			<p className="post-css">Esto es postcss</p>
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