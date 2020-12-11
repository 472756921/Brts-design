/* eslint-disable react/display-name */
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default (): React.ReactElement => {
	let history = useHistory();

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={() => history.push('/')}>
					Back Home
				</Button>
			}
		/>
	);
};
