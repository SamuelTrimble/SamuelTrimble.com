<template>
	<div data-project="YIP">
		<h1 id="projectTitle">Year In Pixels</h1>
		<h2 id="yearAverage"></h2>
		<GridContainer>
			<GridRow>
				<GridCol :small="12">
					<ul id="dotRows" class="clearfix">
						<li class="clearfix col-hideForSmall">
							<p>&nbsp;</p>
							<span></span><span></span><span></span><span></span><span>5</span>
							<span></span><span></span><span></span><span></span><span>10</span>
							<span></span><span></span><span></span><span></span><span>15</span>
							<span></span><span></span><span></span><span></span><span>20</span>
							<span></span><span></span><span></span><span></span><span>25</span>
							<span></span><span></span><span></span><span></span><span>30</span>
							<span></span>
						</li>
					</ul>
				</GridCol>
			</GridRow>
		</GridContainer>
		<h1 id="stats">Random Stats</h1>
		<GridContainer>
			<GridRow>
				<GridCol :small="12" :medium="6" :large="3">
					<h2 class='left'>Month averages:</h2>
					<ul id="monthAverages" class="clearfix"></ul>
					<p>Best month: <span id="bestMonth"></span><br>Worst month: <span id="worstMonth"></span></p>
				</GridCol>
				<GridCol :small="12" :medium="6" :large="3">
					<h2 class='left'>Weekday averages:</h2>
					<ul id="weekdayAverages" class="clearfix"></ul>
					<p>Best day of week: <span id="bestWeek"></span><br>Worst day of week: <span id="worstWeek"></span></p>
				</GridCol>
				<GridCol :small="12" :medium="6" :large="3">
					<h2 class='left'>Day of month averages:</h2>
					<ul id="dayofmonthAverages" class="clearfix"></ul>
					<p>Best day of month: <span id="bestDay"></span><br>Worst day of month: <span id="worstDay"></span></p>
				</GridCol>
				<GridCol :small="12" :medium="6" :large="3">
					<h2 class='left'>Streaks:</h2>
					<ul id="streakAverages" class="clearfix"></ul>
					<p>Longest 'good' streak: <span id="bestStreak"></span><br>Longest 'bad' streak: <span id="worstStreak"></span></p>
				</GridCol>
			</GridRow>
		</GridContainer>
	</div>
</template>

<script>
import { Decimal } from 'decimal.js'

//Support class for building streaks
class YIPStreak {
	constructor(date, value) {
		this.startDate = date;

		this.total = value;
		this.count = 1;
		this.average = value;

		this.good = (value > 3);
		this.bad = (value < 3);
	}
	Test(value) {
		//Worst days kill 'good' streaks
		if ((value === 1) && (this.good)) {
			return false;
		}
		//Best days kill 'bad' streaks
		if ((value === 5) && (this.bad)) {
			return false;
		}
		
		let tempTotal = this.total + value;
		let tempCount = this.count + 1;
		let tempAverage = new Decimal(tempTotal).dividedBy(tempCount);

		if ((this.good) && (tempAverage.greaterThanOrEqualTo(4))) {
			return true;
		}
		if ((this.bad) && (tempAverage.lessThan(3))) {
			return true;
		}
		return false;
	}
	Add(value) {
		this.total += value;
		this.count++;
		this.average = new Decimal(this.total).dividedBy(this.count);
	}
}

export default {
	name: 'yip',
	data() {
		return {
			year: 2018,
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			weekdayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			yearData: [
				[3,5,4,3,4,3,3,3,4,2,3,3,3,3,4,4,4,3,4,4,4,4,2,3,4,4,4,4,3,3,4],
				[3,4,5,5,5,5,3,4,4,4,5,3,4,4,5,4,4,5,5,4,3,4,4,4,3,3,3,4],
				[2,2,4,4,3,3,3,3,3,3,3,4,3,3,3,3,2,3,4,3,3,4,1,1,2,3,2,2,2,3,3],
				[4,2,2,3,3,5,3,2,4,3,4,3,3,4,4,4,3,3,3,4,4,4,4,3,3,3,4,3,4,2],
				[3,3,3,4,4,4,3,3,3,3,4,4,4,3,3,3,3,2,3,3,3,3,4,3,4,1,3,4,3,3,4],
				[3,4,4,3,3,3,2,2,2,2,2,3,3,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				[5,5,5,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,5,4,5,4,4,3,4,5,5,5,4,4,4],
				[4,4,5,5,4,5,5,5,5,3,4,4,4,4,4,4,4,4,3,4,4,4,3,5,4,4,4,4,4,5,4],
				[4,4,4,4,3,4,4,4,5,3,5,3,3,3,3,4,4,4,4,4,4,4,3,5,4,4,3,4,4,3],
				[5,5,5,5,5,4,5,4,4,4,4,4,3,3,4,3,5,3,3,2,1,5,4,3,4,4,3,3,5,4,5],
				[5,5,5,4,3,4,4,3,1,3,4,4,4,4,4,4,4,4,4,3,3,4,4,4,4,4,3,1,3,4],
				[4,4,4,4,4,4,4,3,3,4,1,4,4,4,4,3,4,4,1,4,5,4,4,4,5,5,5,4,4,4,4]
			],
			minStreakLength: 4
		}
	},
	mounted: function() {
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			this.BuildYearAverage();
			this.BuildMonthDots();
			this.BuildMonthAverages();
			this.BuildWeekdayAverages();
			this.BuildDayOfMonthAverages();
			this.BuildStreaks();
		},
		GetDateString: function(date) {
			let mm = date.getMonth() + 1;
			let dd = date.getDate();

			return [
				((mm > 9) ? '' : '0') + mm,
				((dd > 9) ? '' : '0') + dd
			].join('/');
		},
		DaySuffix: function(num) {
			if ((num === 1) || (num === 21) || (num === 31)) {
				return "st";
			}
			if ((num === 2) || (num === 22)) {
				return "nd";
			}
			if ((num === 3) || (num === 23)) {
				return "rd";
			}
			return "th";
		},
		BuildYearAverage: function() {
			const year = document.getElementById("yearAverage");

			let total = 0;
			let average = 0;
			let count = 0;
			this.yearData.forEach((month) => {
				month.forEach((dayValue) => {
					total += dayValue;
					count++;
				});
			});
			average = new Decimal(total).dividedBy(count);

			year.innerHTML = `<span class="tooltip" data-value="${average.floor()}" data-tooltip="(${total}&nbsp;/&nbsp;${count})&nbsp;=&nbsp;${average.toFixed(2)}"></span>`;
		},
		BuildMonthDots: function() {
			const dotRows = document.getElementById("dotRows");

			this.yearData.forEach((item, monthIdx) => {
				let month = document.createElement("li");
				month.className = "clearfix";

				let markup = `<p>${this.monthNames[monthIdx]}</p>`;
				item.forEach((dayValue, dayIdx) => {
					let date = new Date();
					date.setFullYear(this.year, monthIdx, dayIdx+1);
					markup += `<span class="tooltip" data-value="${dayValue}" data-tooltip="${this.GetDateString(date)}&nbsp;(${dayValue})"></span>`;
				});
				month.innerHTML = markup;
				dotRows.appendChild(month);
			});
		},
		BuildMonthAverages: function() {
			const bestMonth = document.getElementById("bestMonth");
			const worstMonth = document.getElementById("worstMonth");
			const months = document.getElementById("monthAverages");

			let monthAverages = [];

			this.yearData.forEach((item) => {
				let monthTotal = new Decimal(0);
				item.forEach((dayValue) => {
					monthTotal = monthTotal.plus(dayValue);
				});
				monthTotal = monthTotal.dividedBy(item.length);
				monthAverages.push(monthTotal);
			});

			let best = new Decimal(0);
			let bestIdx = 0;
			let worst = new Decimal(5);
			let worstIdx = 0;
			monthAverages.forEach((item, idx) => {
				if (best.lessThan(item)) {
					best = item;
					bestIdx = idx;
				}
				if (worst.greaterThan(item)) {
					worst = item;
					worstIdx = idx;
				}

				let month = document.createElement("li");
				month.innerHTML = `<span class="tooltip" data-value="${item.floor()}" data-tooltip="${this.monthNames[idx]} (${item.toFixed(2)})"></span>`;
				months.appendChild(month);
			});
			bestMonth.innerHTML = `${this.monthNames[bestIdx]} (${best.toFixed(2)})`;
			worstMonth.innerHTML = `${this.monthNames[worstIdx]} (${worst.toFixed(2)})`;
		},
		BuildWeekdayAverages: function() {
			const bestWeek = document.getElementById("bestWeek");
			const worstWeek = document.getElementById("worstWeek");
			const weekdays = document.getElementById("weekdayAverages");

			let weekdayAverages = [0,0,0,0,0,0,0];
			let weekdayCount = [0,0,0,0,0,0,0];

			this.yearData.forEach((month, monthIdx) => {
				month.forEach((dayValue, dayIdx) => {
					let date = new Date();
					date.setFullYear(this.year, monthIdx, dayIdx+1);
					let dayOfWeekIdx = date.getDay();

					weekdayAverages[dayOfWeekIdx] += dayValue;
					weekdayCount[dayOfWeekIdx]++;
				});
			});
			let best = new Decimal(0);
			let bestIdx = 0;
			let worst = new Decimal(5);
			let worstIdx = 0;
			weekdayAverages.forEach((item, idx) => {
				item = new Decimal(item).dividedBy(weekdayCount[idx]);

				if (best.lessThan(item)) {
					best = item;
					bestIdx = idx;
				}
				if (worst.greaterThan(item)) {
					worst = item;
					worstIdx = idx;
				}

				let weekday = document.createElement("li");
				weekday.innerHTML = `<span class="tooltip" data-value="${item.floor()}" data-tooltip="${this.weekdayNames[idx]} (${item.toFixed(2)})"></span>`;
				weekdays.appendChild(weekday);
			});
			bestWeek.innerHTML = `${this.weekdayNames[bestIdx]} (${best.toFixed(2)})`;
			worstWeek.innerHTML = `${this.weekdayNames[worstIdx]} (${worst.toFixed(2)})`;
		},
		BuildDayOfMonthAverages: function() {
			const bestDay = document.getElementById("bestDay");
			const worstDay = document.getElementById("worstDay");
			const days = document.getElementById("dayofmonthAverages");

			let dayAverages = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			let dayCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

			this.yearData.forEach((month) => {
				month.forEach((dayValue, dayIdx) => {
					dayAverages[dayIdx] += dayValue;
					dayCount[dayIdx]++;
				});
			});

			let best = new Decimal(0);
			let bestIdx = 0;
			let worst = new Decimal(5);
			let worstIdx = 0;
			dayAverages.forEach((value, idx) => {
				value = new Decimal(value).dividedBy(dayCount[idx]);

				if (best.lessThan(value)) {
					best = value;
					bestIdx = idx;
				}
				if (worst.greaterThan(value)) {
					worst = value;
					worstIdx = idx;
				}

				let monthday = document.createElement("li");
				monthday.innerHTML = `<span class="tooltip" data-value="${value.floor()}" data-tooltip="${idx+1}${this.DaySuffix(idx+1)} (${value.toFixed(2)})"></span>`;
				days.appendChild(monthday);
			});
			bestDay.innerHTML = `${bestIdx+1}${this.DaySuffix(bestIdx+1)} (${best.toFixed(2)})`;
			worstDay.innerHTML = `${worstIdx+1}${this.DaySuffix(worstIdx+1)} (${worst.toFixed(2)})`;
		},
		BuildStreaks: function() {
			const bestStreak = document.getElementById("bestStreak");
			const worstStreak = document.getElementById("worstStreak");
			const streakAverages = document.getElementById("streakAverages");

			let streaks = [];
			let streakBest = null;
			let streakWorst = null;
			let streakEnd = new Date(this.year, 0, 0); //Actually the last day of the previous year

			this.yearData.forEach((month, monthIdx) => {
				month.forEach((dayValue, dayIdx) => {
					if (dayValue === 3) {
						return;
					}
					//Start from this day
					let date = new Date(this.year, monthIdx, dayIdx+1);

					//Skip until previous streak ended
					if (date < streakEnd) {
						return;
					}

					let streak = new YIPStreak(date, dayValue);

					//Start looping through the days following this one, until the streak breaks
					let broken = false;
					let m = monthIdx;
					let d = dayIdx + 1;
					while ((!broken) && (m < this.yearData.length)) {
						while ((!broken) && (d < this.yearData[m].length)) {
							//Test the next day to see if the running average kills the streak
							if (!streak.Test(this.yearData[m][d])) {
								broken = true;
								continue;
							}

							//Add this day to the current streak
							streak.Add(this.yearData[m][d]);

							d++;
						}
						m++;
						d = 0;
					}

					//If the current 'streak' actually qualifies as a streak, add it to the list
					if (streak.count >= this.minStreakLength) {
						streaks.push(streak);
						streakEnd.setFullYear(this.year, streak.startDate.getMonth(), streak.startDate.getDate() + streak.count);
					}
				});
			});

			let startDate = null;
			let endDate = null;
			streaks.forEach((streak, streakIdx) => {
				if (streak.good) {
					if ((streakBest === null) || (streak.count > streakBest.count)) {
						streakBest = streak;
					}
				}
				if (streak.bad) {
					if ((streakWorst === null) || (streak.count > streakWorst.count)) {
						streakWorst = streak;
					}
				}

				startDate = streak.startDate;
				endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + streak.count);

				let streakEle = document.createElement("li");
				streakEle.innerHTML = `<span class="tooltip" data-value="${streak.average.floor()}" data-tooltip="${this.GetDateString(startDate)}&nbsp;-&nbsp;${this.GetDateString(endDate)} (${streak.count}&nbsp;days&nbsp;${((streak.good) ? "&gt;&nbsp;4.00" : "&lt;&nbsp;3.00")})"></span>`;
				streakAverages.appendChild(streakEle);
			});
			if (streakBest !== null) {
				startDate = streakBest.startDate;
				endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + streakBest.count - 1);
				bestStreak.innerHTML = `${this.GetDateString(startDate)} - ${this.GetDateString(endDate)} (${streakBest.count} days &gt; 4.00)`;
			} else {
				bestStreak.innerHTML = 'N/A';
			}
			if (streakWorst !== null) {
				startDate = streakWorst.startDate;
				endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + streakWorst.count - 1);
				worstStreak.innerHTML = `${this.GetDateString(startDate)} - ${this.GetDateString(endDate)} (${streakWorst.count} days &lt; 3.00)`;
			} else {
				worstStreak.innerHTML = 'N/A';
			}
		}
	}
}
</script>

<style lang="scss">
@import "../../styles/_globals";

$yip-red: #B92727;
$yip-orange: #B96C27;
$yip-yellow: #B9B427;
$yip-green: #38B927;
$yip-blue: #278EB9;

#project[data-project="YIP"] {
	#yearAverage {
		> span {
			display: inline-block;
			width: 100px;
			height: 25px;

			text-align: center;

			&[data-value="1"] {
				background-color: $yip-red;
			}
			&[data-value="2"] {
				background-color: $yip-orange;
			}
			&[data-value="3"] {
				background-color: $yip-yellow;
			}
			&[data-value="4"] {
				background-color: $yip-green;
			}
			&[data-value="5"] {
				background-color: $yip-blue;
			}
		}
	}

	#stats {
		margin: 40px 0 20px 0;
	}

	#dotRows {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			display: block;
			margin-bottom: 5px;

			> p {
				display: none;
				float: left;
				margin-right: 20px;
				width: 100px;

				line-height: 25px;
				text-align: right;

				@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
					display: block;
				}
			}
			> span {
				float: left;
				width: calc(100% / 31);
				height: 25px;

				text-align: center;

				border: 1px solid $black;

				@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
					width: calc((100% - 240px) / 31);
				}

				&[data-value="1"] {
					background-color: $yip-red;
				}
				&[data-value="2"] {
					background-color: $yip-orange;
				}
				&[data-value="3"] {
					background-color: $yip-yellow;
				}
				&[data-value="4"] {
					background-color: $yip-green;
				}
				&[data-value="5"] {
					background-color: $yip-blue;
				}
			}
		}
	}

	#monthAverages,
	#weekdayAverages,
	#dayofmonthAverages,
	#streakAverages {
		margin: 0 0 20px 0;
		padding: 0;
		list-style: none;

		> li {
			float: left;

			> span {
				display: block;
				width: 25px;
				height: 25px;

				border: 1px solid $black;
				
				&[data-value="1"] {
					background-color: $yip-red;
				}
				&[data-value="2"] {
					background-color: $yip-orange;
				}
				&[data-value="3"] {
					background-color: $yip-yellow;
				}
				&[data-value="4"] {
					background-color: $yip-green;
				}
				&[data-value="5"] {
					background-color: $yip-blue;
				}
			}
		}
	}

	.left {
		margin-bottom: 10px;

		text-align: left;
	}

	.tooltip {
		position: relative;
	
		&:after {
			display: none;
			position: absolute;
			top: 100%;
			left: 100%;
			padding: 5px;

			content: attr(data-tooltip);
			color: $black;
			@include font-regular();
			font-size: 1rem;
			line-height: 1.2em;

			background: $white;
			border-radius: 4px;
			z-index: 100;
		}
		&:hover:after {
			display: block;
		}
	}

}
</style>
