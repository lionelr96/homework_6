var video = document.querySelector("#myVideo");

window.addEventListener("load", function () {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	volumeOutput = document.querySelector("#volume");
	volumeOutput.innerText = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", () => {
	console.log("Slow down!");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", () => {
	console.log("Go faster!");
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", () => {
	console.log("Skipped ahead!");
	let time = video.currentTime;
	if (time > 30) {
		video.currentTime = 0;
		video.play();
	}
	video.play();
	video.currentTime += 5;
	console.log(time);
});

document.querySelector("#mute").addEventListener("click", () => {
	mute_button = document.querySelector("#mute");
	if (!video.muted) {
		console.log("Video muted!");
		video.muted = true;
		mute_button.innerText = "Unmute";
	} else {
		video.muted = false;
		mute_button.innerText = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("click", () => {
	console.log(`Current volume: ${video.volume}`);

	value = document.querySelector("#volumeSlider").value;
	console.log(`Volume Change to: ${value}`);

	video.volume = value / 100;

	volumeOutput = document.querySelector("#volume");
	volumeOutput.innerText = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", () => {
	console.log("Old school");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", () => {
	console.log("Original");
	video.classList.remove("oldTime");
});
