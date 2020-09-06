/* eslint-disable  no-undef, no-plusplus, camelcase, no-restricted-syntax, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
import { Navigation } from './navigation';

class HomeDisplay {
  static homeDetails() {
    const contents = document.querySelector('.content');

    const details = document.createElement('div');
    details.setAttribute('class', 'home_details');

    const welcomeHeader = document.createElement('h2');
    welcomeHeader.innerHTML = 'Welcome to';
    details.append(welcomeHeader);

    const ownerHeader = document.createElement('h1');
    ownerHeader.innerHTML = 'food fest hotel';
    details.append(ownerHeader);

    const storeMotto = document.createElement('h3');
    storeMotto.innerHTML = 'experience the difference';
    details.append(storeMotto);

    contents.append(details);
  }

  static homePage() {
    //  attributes for video and source tags
    const videoAtt = [
      {
        autoplay: '',
      },
      {
        muted: '',
      },
      {
        loop: '',
      },
      {
        id: 'myVideo',
      },
    ];

    const sourceAtt = [
      {
        src: '../assets/images/video.mp4',
      },
      {
        type: 'video/mp4',
      },
    ];

    // getting the container and creating the video tags
    const container = document.getElementById('content');
    const videoTag = document.createElement('video');

    // looping through the video attributes and setting their values
    const settingAttVideo = (att) => videoTag.setAttribute(
      Object.getOwnPropertyNames(att),
      Object.values(att),
    );
    videoAtt.forEach(settingAttVideo);

    // appending the video tag
    container.append(videoTag);

    // looping through the source attributes setting their values and appending the values to video tag
    const sourceTag = document.createElement('source');

    const settingAttSource = (att) => sourceTag.setAttribute(
      Object.getOwnPropertyNames(att),
      Object.values(att),
    );

    sourceAtt.forEach(settingAttSource);
    videoTag.appendChild(sourceTag);

    // menu
    Navigation.appNavigation();

    // page details
    this.homeDetails();
  }
}

export { HomeDisplay };
