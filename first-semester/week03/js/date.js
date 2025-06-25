const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// console.log(`${year}년 ${month}월 ${date}일`);
// console.log(`${hours}시 ${minutes}분 ${seconds}초`);

// 날짜와 시간을 문자열로 포맷팅
const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
  date
).padStart(2, "0")} ${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

console.log(formattedDate);

// const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
// const formattedHours = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
