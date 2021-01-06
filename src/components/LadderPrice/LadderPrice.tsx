import React, { useState, useEffect } from 'react';
import { LadderPriceProps, LadderPriceItems } from './interface';
import { InputNumber } from 'antd';
const Styles = require('./style/index.css');

const LadderPrice = (props: LadderPriceProps): React.ReactElement => {
	const message = ['入住时间', '小时'];
	const [testData, changeTestData] = useState([
		{
			num: 12,
			percentage: 100
		},
		{
			num: 24,
			percentage: 50
		},
		{
			num: 48,
			percentage: 20
		},
		{
			num: 72,
			percentage: 0
		}
	]);
	const debounce = (func: any, wait: number) => {
		let timeout: any;

		return function (...args: any) {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func(args);
			}, wait);
		};
	};

	const changeData = (e: any, index: number, type: string) => {
		let newData = testData[index];
		if (type === 'num') {
			if (e > testData[index + 1]?.num) {
				return false;
            }
            
			newData.num = Number(e);
		} else {
			newData.percentage = Number(e);
		}
		testData[index] = newData;

		changeTestData([...testData]);
	};

	return (
		<div>
			{testData?.map((it: LadderPriceItems, i: number) => (
				<div key={i} className={Styles.items}>
					{message[0]}前{' '}
					<InputNumber
						min={(testData[i - 1]?.num || 1) + 1}
						max={(testData[i + 1]?.num || 129) - 1}
						value={it?.num}
						onChange={(e) => changeData(e, i, 'num')}
					/>{' '}
					{message[1]}
					，收取违约金{' '}
					<InputNumber
						max={(testData[i - 1]?.percentage || 101) - 1}
						min={(testData[i + 1]?.percentage || 1) - 1}
						value={it?.percentage}
						onChange={(e) => changeData(e, i, 'percentage')}
					/>{' '}
					%
				</div>
			))}
		</div>
	);
};

export default LadderPrice;
