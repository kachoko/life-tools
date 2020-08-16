import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/Header";
import { TextField, Button } from "@material-ui/core";

function MicrowaveComponent() {
	const [wat, setWat] = useState('');
	const [originWat, setOriginWat] = useState('');
	const [originMinute, setOriginMinute] = useState('');
	const [originSecond, setOriginSecond] = useState('');
	const [convertValue, setConvertValue] = useState('');

	useEffect(() => {
		const microwave = localStorage.getItem('microwave') || '';
		setWat(microwave);
	}, []);

	/**
	 * 計算
	 */
	function calcResult() {
		const wariai = parseInt(originWat, 10) / parseInt(wat, 10);
		// console.log('割合: ', wariai);
		const motonojikan = parseInt(originMinute, 10) * 60 + parseInt(originSecond, 10);
		// console.log('元の時間: ', motonojikan);
		const result = motonojikan * wariai;
		// console.log('結果秒: ', result);
		const resultMin = Math.floor(result / 60);
		const resultSecond = result % 60;
		setConvertValue(`${resultMin.toString()}分${resultSecond.toString()}秒`);
	}

	function setToStorage() {
		localStorage.setItem('microwave', wat);
	}

	return (
		<main>
			<HeaderComponent title="電子レンジW変換ツール" />

			<section>
				<form>
					<p>あなたが使用している電子レンジのWは？</p>
					<TextField label="使うレンジのW数" type="tel" value={wat} onChange={(e) => {setWat(e.target.value)}} onBlur={setToStorage} />
				</form>

				<form>
					<p>変換したい元のWと時間は？</p>
					<TextField label="変換したいW数" type="tel" value={originWat} onChange={(e) => {setOriginWat(e.target.value)}} />
					<TextField label="分" type="tel" value={originMinute} onChange={(e) => {setOriginMinute(e.target.value)}} />
					<TextField label="秒" type="tel" value={originSecond} onChange={(e) => {setOriginSecond(e.target.value)}} />
					<div>
						<Button color="primary" onClick={calcResult}>変換する</Button>
					</div>
				</form>
			</section>

			<section>
				<p>変換結果</p>
				<span>{convertValue}</span>
			</section>

			{/* <div style={{ padding: 30 }}>
				<Button color="secondary">Hello World</Button>
			</div> */}
		</main>
	);
}

export default MicrowaveComponent;