import { Navigation } from "./navigation.js";

class HomeDisplay {
  static homeDetails() {
    let contents = document.querySelector(".content");

    let details = document.createElement("div");
    details.setAttribute("class", "home_details");

    let welcomeHeader = document.createElement("h2");
    welcomeHeader.innerHTML = "Welcome to";
    details.append(welcomeHeader);

    let ownerHeader = document.createElement("h1");
    ownerHeader.innerHTML = "food fest hotel";
    details.append(ownerHeader);

    let storeMotto = document.createElement("h3");
    storeMotto.innerHTML = "experience the difference";
    details.append(storeMotto);

    contents.append(details);
  }

  static homePage() {
    //  attributes for video and source tags
    const videoAtt = [
      {
        autoplay: "",
      },
      {
        muted: "",
      },
      {
        loop: "",
      },
      {
        id: "myVideo",
      },
    ];

    const sourceAtt = [
      {
        src: "../assets/images/video.mp4",
      },
      {
        type: "video/mp4",
      },
    ];

    // getting the container and creating the video tags
    let container = document.getElementById("content");
    let videoTag = document.createElement("video");

    // looping through the video attributes and setting their values
    let settingAttVideo = (att) => {
      return videoTag.setAttribute(
        Object.getOwnPropertyNames(att),
        Object.values(att)
      );
    };
    videoAtt.forEach(settingAttVideo);

    // appending the video tag
    container.append(videoTag);

    // looping through the source attributes setting their values and appending the values to video tag
    let sourceTag = document.createElement("source");

    let settingAttSource = (att) => {
      return sourceTag.setAttribute(
        Object.getOwnPropertyNames(att),
        Object.values(att)
      );
    };

    sourceAtt.forEach(settingAttSource);
    videoTag.appendChild(sourceTag);

    // menu
    Navigation.appNavigation();

    // page details
    this.homeDetails();
  }
}

export { HomeDisplay };
