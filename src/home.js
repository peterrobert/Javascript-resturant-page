import { Navigation } from "./navigation.js";

class HomeDisplay {

    static homePage() {
        //  attributes for video and source tags
        const videoAtt = [{
            'autoplay': ''
        }, {
            'muted': ''
        }, {
            'loop': ''
        }, {
            'id': "myVideo"
        }];
        const sourceAtt = [{
            'src': '../assets/images/video.mp4'
        }, {
            'type': 'video/mp4'
        }]

        // getting the container and creating the video tags
        let container = document.getElementById('content');
        let videoTag = document.createElement('video');

        // looping through the video attributes and setting their values
        let settingAttVideo = (att) => {
            return videoTag.setAttribute(Object.getOwnPropertyNames(att), Object.values(att));
        }
        videoAtt.forEach(settingAttVideo);

        // appending the video tag
        container.append(videoTag);

        // looping through the source attributes setting their values and appending the values to video tag
        let sourceTag = document.createElement('source');

        let settingAttSource = (att) => {
            return sourceTag.setAttribute(Object.getOwnPropertyNames(att), Object.values(att));
        }

        sourceAtt.forEach(settingAttSource);
        videoTag.appendChild(sourceTag)

        // menu and details
        Navigation.appNavigation();
    };

};

export {
    HomeDisplay
};