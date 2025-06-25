// const movies = [
//   { title: "썬더볼츠", rating: 8.42, genre: "액션" },
//   { title: "마인크래프트 무비", rating: 7.32, genre: "코미디" },
//   { title: "파과", rating: 8.25, genre: "액션" },
//   { title: "거룩한 밤: 데몬 헌터스", rating: 6.92, genre: "액션" },
//   { title: "야당", rating: 9.07, genre: "범죄" },
//   { title: "해피엔드", rating: 8.44, genre: "드라마" },
// ];

// // 1. forEach: 각 영화의 제목을 콘솔에 바로 출력
// movies.forEach((movie) => {
//   console.log("영화 제목:", movie.title);
// });

// // 2. map: 영화의 제목과 장르를 추출해 '새로운' 객체 배열 만들기
// const titleAndGenres = movies.map((movie) => ({
//   title: movie.title,
//   genre: movie.genre,
// }));
// console.log("제목+장르만 담긴 배열: ", titleAndGenres);

// // 3. filter: 평점이 8점 이상인 영화만 걸러내기
// const highRated = movies.filter((movie) => {
//   return movie.rating >= 8;
// });
// console.log("평점 높은 영화 목록:", highRated);

// // 4. filter: 장르에 '액'이 들어가는 영화만 걸러내기
// const actionMovies = movies.filter((movie) => {
//   return movie.genre.includes("액");
// });
// console.log("액이 들어가는 장르의 영화 목록:", actionMovies);

async function fetchMovies() {
  try {
    const response = await fetch("movies.json");
    const movies = await response.json();
    const container = document.getElementById("movieContainer");
    const movieList = movies.filter((movie) => movie.genre === "액션");

    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>
        <p class="card-rating">⭐ ${movie.rating}</p>
        <p class="card-description">${movie.description}</p>
      </div>
    `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

fetchMovies();
