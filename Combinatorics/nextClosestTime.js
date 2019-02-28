let currentMin = Number.MAX_SAFE_INTEGER;
let outputTime = '';

const createTime = function (digitOne, digitTwo, digitThree, digitFour) {
  let count = 1;

  if (digitOne <= 2) {
    count++;
  }

  if (digitTwo <= 4) {
    count++;
  }

  if (digitThree <= 5) {
    count++;
  }


  return count == 4 ? [digitOne + digitTwo, digitThree + digitFour] : null;
};

const convertTimeToMinutes = function (presentHour, presentMinute, futureHour, futureMinute) {
  let result = 0;


  const totalHours = parseInt(futureHour - presentHour);


  const totalMinutes = parseInt(futureMinute - presentMinute);

  if (totalHours < 0 || totalMinutes < 0) {
    result += 1440;
  }

  result += Math.abs(totalHours * 60) + Math.abs(totalMinutes);

  return result;
};

const backtrack = function (choices, combos, currentHour, currentMinutes) {
  if (combos.length == 4) {
    const time = createTime(combos[0], combos[1], combos[2], combos[3]);
    if (time) {
      const convertedMinutes = convertTimeToMinutes(currentHour, currentMinutes, time[0], time[1]);
      if (convertedMinutes < currentMin) {
        currentMin = convertedMinutes;
        outputTime = `${time[0]}:${time[1]}`;
      }
    }
  } else {
    for (let i = 0; i < choices.length; i++) {
      combos.push(choices[i]);
      backtrack(choices, combos, currentHour, currentMinutes);
      combos.pop();
    }
  }
};

const nextClosestTime = function (time) {
  const choices = time.split(':').join('').split('');
  const currentHour = choices[0] + choices[1];
  const currentMinutes = choices[2] + choices[3];

  backtrack(choices, [], currentHour, currentMinutes);

  return outputTime;
};
