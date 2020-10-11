import React, { useState, useEffect } from "react";
import HeaderComponent from "../Header/HeaderComponent";
import { TextField, Button, Grid, createMuiTheme, ThemeProvider } from "@material-ui/core";
import styles from "./MicrowaveComponent.module.scss";
import { orange, teal } from '@material-ui/core/colors';

function MicrowaveComponent() {
	const [wat, setWat] = useState('');
	const [originWat, setOriginWat] = useState('');
	const [originMinute, setOriginMinute] = useState('');
	const [originSecond, setOriginSecond] = useState('');
	const [convertValue, setConvertValue] = useState('');

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: teal[900],
			},
			secondary: {
				main: orange[500],
			},
		},
	});

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

	function renderComponent() {
		return (
			<div>
				<HeaderComponent title="電子レンジW変換ツール" />
				<main>
					<div className={styles["main-contents"]}>
						<section>
							<form>
								<section>
									{/* <div className="question-title">
										<span>使用レンジW入力</span>
									</div> */}
									<div className={styles["question-contents"]}>
										<TextField className={styles["input-wat"]} label="使うレンジのW" variant="standard" type="tel" value={wat} onChange={(e) => { setWat(e.target.value) }} onBlur={setToStorage} />
									</div>
									{/* <div className="question-title">
										<span>変換したい元のWと時間</span>
									</div> */}
									<div className={styles["question-contents"]}>
										<Grid>
											<TextField className={styles["input-wat"]} label="変換したいW" variant="standard" type="tel" value={originWat} onChange={(e) => { setOriginWat(e.target.value) }} />
										</Grid>
										<Grid>
											<TextField className={styles["input-time"]} label="分" variant="standard" type="tel" value={originMinute} onChange={(e) => { setOriginMinute(e.target.value) }} />{' '}
											<TextField className={styles["input-time"]} label="秒" variant="standard" type="tel" value={originSecond} onChange={(e) => { setOriginSecond(e.target.value) }} />
										</Grid>
									</div>
								</section>
								<section className={styles["button-section"]}>
									<Button color="secondary" variant="contained" onClick={calcResult}>変換する</Button>
								</section>
							</form>
						</section>

						<section className={styles["answer-section"]}>
							<span>変換結果：</span><span>{convertValue}</span>
						</section>

						<section className={styles["notice-section"]}>
							<span>計算結果はあくまで目安として利用してください。</span>
						</section>
					</div>
				</main>
			</div>
		);
	}

	return (
		<ThemeProvider theme={theme}>
			{renderComponent()}
		</ThemeProvider>
	);
}

export default MicrowaveComponent;