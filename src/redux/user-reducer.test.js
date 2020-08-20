import { userReducer, setUserActionCreator} from './user-reducer'
import thunk from "redux-thunk";

let user = {
    name: 'Kira Shatulova',
    role: 'Frontend Developer',
    contacts: [
        {
            name: 'Russia, Saint-Petersburg | Israel, Tel Aviv',
            iconComponent: 'home',
            link: null
        },
        {
            name: '+7 (911) 700-71-37',
            iconComponent:  'phone',
            link: 'tel:+79117007137'
        },
        {
            name: 'kira.shatulova@gmail.com',
            iconComponent:  'mail',
            link: 'mailto:kira.shatulova@gmail.com'
        },
        {
            name: 'LinkedIn',
            iconComponent:  'linkedin',
            link: 'https://www.linkedin.com/in/kira-shatulova-119277110'
        },
        {
            name: 'GitHub',
            iconComponent:  'github',
            link: 'https://github.com/KiraJS'
        },
        {
            name: 'Facebook',
            iconComponent:  'facebook',
            link: 'https://www.facebook.com/kirashatulova'
        }
    ],
    education: [
        {
            company: 'Loft Programming School\n',
            name: '',
            from: '2015',
            to: '2018',
            description: 'Angular | React | NodeJS | JavaScript',
        },
        {
            company: 'LearnJS School\n',
            name: '',
            from: '2016',
            to: '2017',
            description: 'AngularJS | Angular | TypeScript | NodeJS | Vue',
        },
        {
            company: 'HTML Academy',
            name: 'Frontend Developer',
            from: '2013',
            to: '2015',
            description: '',
        },
        {
            company: 'ITVDN MICROSOFT CERTIFICATION\n',
            name: '',
            from: '2013',
            to: '2015',
            description: '',
        },
        {
            company: 'Netology',
            name: 'Associate\'s Degree, Web Design',
            from: '2014',
            to: '2014',
            description: '',
        },
        {
            company: 'Herzen State Pedagogical University of Russia',
            name: '',
            from: '2003',
            to: '2007',
            description: '',
        }
    ],
    experience: [
        {
            role: 'Senior Frontend Developer',
            company: 'Luxoft',
            from: 'August 2018',
            to: 'Present',
            description: 'Development multilanguage SPA interface for famous International shipping, courier, and packaging service.',
            skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS']
        },
        {
            role: 'Frontend Developer',
            company: 'Selectel',
            from: 'May 2016',
            to: 'August 2018',
            description: 'Development of interfaces for the services of the largest Russian IT infrastructure provider.',
            skills: ['Angular', 'TypeScript', 'LESS']
        },
        {
            role: 'Frontend Development Tutor',
            company: 'HTML Academy',
            from: 'April 2015',
            to: 'April 2017',
            description: 'Teaching students skills in html, css, javascript. Code review, accepting graduation projects.',
            skills: []
        },
        {
            role: 'Frontend Developer',
            company: 'Freelance',
            from: 'May 2014',
            to: 'May 2016',
            description: 'Development application with html, css, javascript, angularjs.',
            skills: ['JavaScript', 'AngularJS', 'LESS']
        }
    ],
    skills: ['JavaScript', 'Angular', 'TypeScript', 'React', 'Redux', 'RxJS', 'SCSS', 'LESS', 'ES6', 'NodeJS', 'Java', 'Agile']
}

describe('user tests', () => {

    let userState;
    it('should set user', () => {
        let action = setUserActionCreator(user)
        let newState = userReducer(userState, action)
        expect(newState.name).toBe('Kira Shatulova');
    });
});
