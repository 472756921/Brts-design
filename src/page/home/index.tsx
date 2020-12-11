import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
	let history = useHistory();

	function handleClick() {
		history.push('/components');
	}
	return (
		<div style={{ textAlign: 'center' }}>
			<div style={{ fontSize: '30px', color: '#1E90FF' }}>BRTS-Design</div>
			<Button onClick={handleClick}>组件</Button>
		</div>
	);
};

export default Home;
