// import HomeIcon from "@material-ui/icons/Home";
// import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// import MailIcon from "@material-ui/icons/Mail";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import React from "react";
// import userReducer from "./user-reducer";
// import experienceReducer from "./experience-reducer";
//
// export let store = {
//     _state:  {
//         menuItems: [
//             {
//                 link: '/contacts',
//                 name: 'Contacts',
//             },
//             {
//                 link: '/experience',
//                 name: 'Experience'
//             },
//             {
//                 link: '/skills',
//                 name: 'Skills'
//             },
//             {
//                 link: '/education',
//                 name: 'Education'
//             },
//             {
//                 link: '/certificates',
//                 name: 'Certificates'
//             },
//             {
//                 link: '/admin',
//                 name: 'Admin'
//             },
//         ],
//         experiencePage: {
//             activeStep: 0
//         },
//         user: {
//             name: 'Kira Shatulova',
//             role: 'Frontend Developer',
//             contacts: [
//                 {
//                     name: 'Russia, Saint-Petersburg | Israel, Tel Aviv',
//                     iconComponent:  <HomeIcon />,
//                     link: null
//                 },
//                 {
//                     name: '+7 (911) 700-71-37',
//                     iconComponent:  <PhoneIphoneIcon />,
//                     link: 'tel:+79117007137'
//                 },
//                 {
//                     name: 'kira.shatulova@gmail.com',
//                     iconComponent:  <MailIcon />,
//                     link: 'mailto:kira.shatulova@gmail.com'
//                 },
//                 {
//                     name: 'LinkedIn',
//                     iconComponent:  <LinkedInIcon />,
//                     link: 'https://www.linkedin.com/in/kira-shatulova-119277110'
//                 },
//                 {
//                     name: 'GitHub',
//                     iconComponent:  <GitHubIcon />,
//                     link: 'https://github.com/KiraJS'
//                 },
//                 {
//                     name: 'Facebook',
//                     iconComponent:  <FacebookIcon />,
//                     link: 'https://www.facebook.com/kirashatulova'
//                 }
//             ],
//             experience: [
//                 {
//                     role: 'Senior Frontend Developer',
//                     company: 'Luxoft',
//                     from: 'August 2018',
//                     to: 'Present',
//                     description: 'Development multilanguage SPA interface for famous International shipping, courier, and packaging service.',
//                     skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS']
//                 },
//                 {
//                     role: 'Frontend Developer',
//                     company: 'Selectel',
//                     from: 'May 2016',
//                     to: 'August 2018',
//                     description: 'Development of interfaces for the services of the largest Russian IT infrastructure provider.',
//                     skills: ['Angular', 'TypeScript', 'LESS']
//                 },
//                 {
//                     role: 'Frontend Development Tutor',
//                     company: 'HTML Academy',
//                     from: 'April 2015',
//                     to: 'April 2017',
//                     description: 'Teaching students skills in html, css, javascript. Code review, accepting graduation projects.',
//                     skills: []
//                 },
//                 {
//                     role: 'Frontend Developer',
//                     company: 'Freelance',
//                     from: 'May 2014',
//                     to: 'May 2016',
//                     description: 'Development application with html, css, javascript, angularjs.',
//                     skills: ['JavaScript', 'AngularJS', 'LESS']
//                 }
//             ],
//             skills: ['JavaScript', 'Angular', 'TypeScript', 'React', 'Redux', 'RxJS', 'SCSS', 'LESS', 'ES6', 'NodeJS', 'Java', 'Agile']
//         }
//     },
//     _callSubscriber() {},
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.user = userReducer(this._state.user, action);
//         this._state.experiencePage = experienceReducer(this._state.experiencePage, action)
//         this._callSubscriber(this._state);
//     },
// }