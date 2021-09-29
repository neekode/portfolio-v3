import $ from "jquery";

export const addBounceOnHover = (el) => {
    el.current ? el.current.onmouseover = () => {
        $(el.current).addClass('animated bounce');
    } : el.current = null;

    el.current ? el.current.onmouseleave = () => {
        setTimeout(() => $(el.current).removeClass('animated bounce'), 1000);
    } : el.current = null;

    return el;
}

export const themeChange = (el, scrollY, setSection) => {
    const {offsetTop} = el.current;
    if (scrollY > (offsetTop - 50)) {
        setSection(el.current.id);
    }
}

export const jobs = [
    {
        title: "Microsoft (Allyis Contract) : Nov. 2019 - July 2021",
        isElExpanded: false,
        description: "Worked on Microsoft Teams Rooms, MS's smart conference room. Developed UI for the meeting room console and front-of-room screens, and was a major contributor in the app's migration from AngularJS to React Hooks. Wrote SCSS, Jest and Jasmine test suites, met accessibility standards, matched rigid architecture, and met high-level PR reviews. \n Reference: Naved Rangwala (naved.rangwala@something.com)",
        contributions: [{
            name: "Meeting Info, Clock",
            expanded: "Helped build a React meeting info module which used app-wide global context imports and GraphQL queries to pull info into component such as meeting name and duration. Also solo-developed the clock display."
        }, {
            name: "Meeting More Menu",
            expanded: "Translated a more menu dropdown used by meeting organizer for actions like Mute All and Admit All, from AngularJS to React, as well as re-built the component to be a full-screen dialog menu. "
        }, {
            name: "Layout Switcher UI",
            expanded: "Built in AngularJS. Utilized modal framework to build out a button handler than when pressed render's dialog component which prompts user to change front-of-room screen's layout."
        }, {
            name: "PTZ Camera, Angular",
            expanded: "Built a button handler on center console which enables/disables remote camera control. Works with a service which sends metadata to desktop client meetings and checks for meeting's PTZ capability"
        }, {
            name: "PTZ Camera, React",
            expanded: "Worked with service and sent data thru CDL to React-side GraphQL subscription to render info when PTZ was active. Re-implemented button handler and built new GQL Mutation sending data back to Angular repo"
        }, {
            name: "Background Image Effect",
            expanded: "Floated to desktop client team to work on video background image effect. Fixed a couple bugs and added buttons which switch out user's background image. Also added telemetry."
        }]
    },
    {
        title: "People Tech Group : Nov. 2018 – Aug. 2019",
        isElExpanded: false,
        description: "First professional software job; was 1 out of 15 interns chosen for a junior-level position. Worked on CPRS, a business-facing app contracted from Costco and other companies designed for auditors to process claims. I researched and developed features for it in React, helped integrate TypeScript into the architecture, and modified SQL datatables for testing. I also helped vet interns for future positions and played a pseudo mentorship role. ",
        contributions: [{
            name: "Condition Based Rendering",
            expanded: "Developed logic which pulls privilege and role from currently logged in user object and conditionally renders certain features/pieces of the application based on that. "
        }, {
            name: "Push Notification System",
            expanded: "Researched different packages and implemented a notifier which launches alerts notifying the user when a claim is created, added, deleted, edited, etc. and when feedback from the HTTP request was received."
        }, {
            name: "Add/Edit Claim Module",
            expanded: "Worked on a form component which, based on user action either creating or editing a claim, rendered and allowed them to utilize our RESTful api and communicate with our backend thru HTTP requests."
        }, {
            name: "Working with Interns",
            expanded: ""
        }, {
            name: "Working with Interns",
            expanded: ""
        }]
    },
    {
        title: "Freelance",
        isElExpanded: false,
        description: "",
        contributions: [{
            name: "",
            expanded: ""
        }, {
            name: "",
            expanded: ""
        },
            {
                name: "",
                expanded: ""
            }]
    }
]