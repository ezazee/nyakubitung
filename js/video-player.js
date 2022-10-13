// const main_video = document.querySelector(".main-video video");
// const main_video_title = document.querySelector(".main-video .title");
// const video_playlist = document.querySelector(".video-playlist .videos");

// let data = [
//   {
//     id: "a1",
//     title: "Festival Pesona Selat Lembeh 2022",
//     name: "Festival Pesona Selat Lembeh 2022.mp4",
//     duration: "2:47",
//   },
//   {
//     id: "a2",
//     title: "Nyaku Bitung Sahabat UMKM",
//     name: "Nyaku Bitung Sahabat UMKM.mp4",
//     duration: "60:00",
//   },
//   {
//     id: "a3",
//     title: "Vlog Ekslusif TIM Nyaku Bitung",
//     name: "Vlog Ekslusif TIM Nyaku Bitung.mp4",
//     duration: "24:49",
//   },
// ];

// data.forEach((video, i) => {
//   let video_element = `
//                 <div class="video" data-id="${video.id}">
//                     <img src="assets/img/play.svg" alt="">
//                     <p>${i + 1 > 9 ? i + 1 : "0" + (i + 1)}. </p>
//                     <h3 class="title">${video.title}</h3>
//                     <p class="time">${video.duration}</p>
//                 </div>
//     `;
//   video_playlist.innerHTML += video_element;
// });

// let videos = document.querySelectorAll(".video");
// videos[0].classList.add("active");
// videos[0].querySelector("img").src = "assets/img/pause.svg";

// videos.forEach((selected_video) => {
//   selected_video.onclick = () => {
//     for (all_videos of videos) {
//       all_videos.classList.remove("active");
//       all_videos.querySelector("img").src = "assets/img/play.svg";
//     }

//     selected_video.classList.add("active");
//     selected_video.querySelector("img").src = "assets/img/pause.svg";

//     let match_video = data.find(
//       (video) => video.id == selected_video.dataset.id
//     );
//     main_video.src = "assets/videos/" + match_video.name;
//     main_video_title.innerHTML = match_video.title;
//   };
// });

// let listVideo = document.querySelectorAll(".video-list .vid");
// let mainVideo = document.querySelector(".main-video .video");
// let title = document.querySelectorAll(".main-video .title-galery");

// listVideo.forEach((video) => {
//   video.onclick = () => {
//     listVideo.forEach((vid) => vid.classList.remove("active"));
//     video.classList.add("active");
//     if (video.classList.contains("active")) {
//       let src = video.children[0].getAttribute("src");
//       mainVideo.src = src;
//       let text = video.children[1].innerHTML;
//       title.innerHTML = text;
//     }
//   };
// });
