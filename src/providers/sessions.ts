import { Injectable } from '@angular/core';

@Injectable()
export class SessionData {
    allSessions = {
        "openingKeynote": [{
                "id": "998",
                "title": "KEYNOTE: ESSENTIAL PRODUCT OWNERSHIP: IT TAKES A VILLAGE",
                "descriptions": "In this interactive session, you’ll learn multiple Innovation Games for Agile Teams to collaborate to align on what Agile means to the team, identify unmet market needs, explore product possibilities, and conduct retrospectives. You will learn the games by playing the games during the session. Every attendee will be able to immediately apply at least one game after the conference.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "8:00 am - 9:15 am",
                "room": "Henrico Ballroom A/B",
                "category": "Keynote",
                "speakers": ["Bob Galen"],
                "image": ["assets/Headshots/bgalen.jpg"],
                "additional-materials": "/app"
        }],
        "closingKeynote": [{
                "id": "999",
                "title": "KEYNOTE: The Storyteller’s Secret: How Narrative Intelligence Can Transform Your Organization",
                "descriptions": "Want to elevate efficiency, increase buy-in from stakeholders, and decrease frustration upstream and down? Build a team of master storytellers.Blockbuster films, timeless literature, memorable journalism, and the funniest jokes— they’re all powered by the same fuel: masterful stories. That same narrative power is central to the most dynamic teams and the most innovative companies, all of whom have uncovered a single secret: all effective communication is simply good storytelling.Revealing we are all storytellers at heart, Jason helps to build the capacity to understand how stories work, how they’re built, and why they stick. Transforming an organization’s communications practices, graduating them from clumsy to focused, from random to intentional, from scattered to purposeful, Jason explores the power of narrative design.In this fast-paced, inventive keynote, you’ll be handed tools used by the greatest storytellers of our time, and you’ll build muscle as they have, learning how to aggregate, curate, and amplify your message. Putting those story-making tools to use, you’ll elevate standard keynotes into contagious messages, transform conference room presentations into memorable experiences, and convert the most mundane email chains and team meetings into behavior-changing, performance-driving events. And you’ll do it all on the back on a shared, fundamental human hunger for stories that move, motivate, and matter.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "3:30 pm 4:45 pm",
                "room": "Henrico Ballroom A/B",
                "category": "Keynote",
                "speakers": ["Jason Allen Ashlock"],
                "image": ["assets/Headshots/jaschlock.jpg"],
                "additional-materials": "/app"
        }],        
        "sessions": [{
                "id": "1",
                "title": "INNOVATION GAMES FOR AGILE TEAMS",
                "descriptions": "In this interactive session, you’ll learn multiple Innovation Games for Agile Teams to collaborate to align on what Agile means to the team, identify unmet market needs, explore product possibilities, and conduct retrospectives. You will learn the games by playing the games during the session. Every attendee will be able to immediately apply at least one game after the conference.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Hanover Room",
                "category": "Innovation Games",
                "speakers": ["Jason Tanner"],
                "image": ["assets/Headshots/jtanner.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "2",
                "title": "The Journey is the Interface – Designing Ecosystems in the Internet of Things",
                "descriptions": "Agile teams today are being asked to do a whole lot more. The notion of a “T” shaped person was created Tim Brown (CEO of IDEO) coined it in the 1990s to describe the new breed of worker. I believe that scrum team members can contribute a lot more to the business than their standard role traditionally dictates. A team member critical and skeptical thinking can be used earlier in the process. Their other skills can be used to solve other problems within the business. Their role can stretch to include other aspects that intrigue them and keep them interested. We have team members who write product documentation, are scrum masters, are building infrastructure to support rapid release, are taking ownership for security and compliance to standards, are presenting the development process to customers, are visiting customer sites to research how people are using the product, are writing social media content, are devising internal communication strategies, are doing agile coaching, are creating personas and are using their natural skills and abilities where they are best suited to help move the business forward. In this track we will go over all the ways we can evolve into T Shape.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Henrico Ballroom A",
                "category": "UX/Design",
                "speakers": ["Jason Snook"],
                "image": ["assets/Headshots/jsnook.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "3",
                "title": "Dev & Ops: Bridging the Divide",
                "descriptions": "Recently we’ve seen design’s recognition as key driver of business value and differentiation, from the competition, reach staggering new heights. High profile articles have been written, large acquisitions have taken place, and documentaries have been made but now that design is in the spotlight everyone wants to get involved. Like it or not (and you should definitely like it) design is no longer a solitary, heads down discipline and design can no longer only be done solely by Designers (with a capital D). To explore that perspective this talk would focus on three specific areas… • How to successfully plan and facilitate collaborative design sessions that could range from a brainstorm (a few hours) to a full design sprint (5 full days). • How to get non-Designers (Product, tech, business, etc…) engaged, comfortable, and excited about participating in the design process (and why that’s important). • A look at the tools and techniques the audience can start to implement immediately to make the above happen. How can they use things like conversation design, sketching, improv, critique, and research to arrive at a better solution that everyone is on board with and understands. Steven Garrity said “The process of pulling big ideas out of the minds of a team into concrete notes and sketches may be the most important skill a designer can offer.” and this session should help make designers more successful at doing just that.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Henrico Ballroom B",
                "category": "DevOps/Testing",
                "speakers": ["Ryan Shriver", "Don Mills"],
                "image": ["assets/Headshots/rshriver.png","assets/Headshots/dmills.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "4",
                "title": "Case Studies of Continuous Improvement through Metrics",
                "descriptions": "There are many benefits to “doing Agile”, but one of the most important is gathering data. Unlike physical work, knowledge work is invisible. We can’t see it, but when we capture data about it then knowledge work begins to take a shape. Humans are visual creatures, and when we can see things we can improve them.Learn how to improve the performance of your Agile teams by doing analysis with real customer case study data. We’ll look at data on team performance based on various Agile metrics such as Burnups/Burndowns, Cumulative Flow Diagrams, Velocity Chart, SDPI charts, and more. We’ll mine them for insight to interpret possible challenges the team is facing and determine prescriptive actions that will influence improvement.This will be a very interactive session, where everyone comes away learning something. We’ll examine how to mine for internal performance data, evaluate what we can conclude from actions happening outside the boundaries of agile practices and pinpoint areas that will have the most impact on future projects to get them back on track. The goal is to turn work into data, data into insights and insight into action. Also… if you bring your own metrics (either paper, PDF or in your Agile platform), I’ll interpret them for you in real time after the session.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Spotsylvania Room",
                "category": "Requirements/Metrics",
                "speakers": ["Jim Damato"],
                "image": ["assets/Headshots/jdamato.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "5",
                "title": "WIP—It’s Worse Than You Think",
                "descriptions": "Too much work-in- process (WIP) permeates our lives and creates constant challenges to our ability to focus. Enterprises too, are focus-starved, because too many strategic initiatives are underway, each competing for organizational capacity required to win in the desired playing field.\n Two issues whose impact can be measured arise from not attending to WIP: \n 1. Poor Capacity Utilization—starting work without first finishing work steals precious organizational capacity from current work-in- process, increasing the time to complete any job. Every item added to a queue or batch increases the time to complete by the same increasing factor \n 2. Task Shifting—Every time focus is shifted, a measurable loss of efficiency results. Flow, as defined by delivering a steady stream of prioritized work in the least amount of time, is a foundational goal of Kanban and other Lean-Agile methods. Optimizing flow by managing queues can be shown mathematically as the most efficient means of improvement. \n In this learning experience, we will look at how WIP consumes enterprise capacity at alarming rates. We will treat strategy as decisions or choices to make to be successful, and with each choice we narrow organizational focus required to succeed in whatever market we choose to compete. Top down and bottom-up WIP will be addressed with Kanban principles, and the audience will participate in activities and exercises that will provide key insights on how to win when our enterprise has finite capacity.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Chesterfield Room",
                "category": "Agile Methods",
                "speakers": ["Guy Beaver"],
                "image": ["assets/Headshots/gbeaver.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "6",
                "title": "Because Six Year Product Cycles Won’t Keep You In Business",
                "descriptions": "Physical products can be developed with the Scrum Framework. This talk explains how that’s possible, and does away with myths surrounding the use of Scrum for hard product development. \n Scrum outside of software gets remarks like “the Sprint cycle time is too short for products,” and, “steps in building hardware are too complex for Scrum.” In this talk I’ll work through the classic Scrum process – 3 roles, 4+1 meetings, 3 artifacts, and explain and show examples to the contrary. Big successes have been scored with applying Scrum in an environment where classic project management structures are still prevalent, and unfortunately still failing.\n Examples are taken from my own experience: CSM for Hardware classes with simulations, building products in an open source space, and also within commercial organizations.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Brunswick Room",
                "category": "Agile In Hardware",
                "speakers": ["Peter Borsella"],
                "image": ["assets/Headshots/pborsella.jpg"],
                "additional-materials": "/app"
            },
            {
                "id": "7",
                "title": "",
                "descriptions": "Is your Product Owner available to the team, empowered to make decisions, knowledgeable in their business domain, engaged in the product and leading the way for delivery of value? This session does a deep dive in the these ideas. \nThe session starts with a brief video to demonstrate the importance of Product Ownership. The session then discusses 5 key attributes to look for in a Product Owner: \n Bandwidth \n Power \n Knowledge \n Interest \n Vision \n After that discussion, we will have an interactive exercise to identify what a Product Owner does day to day. The debrief will identify the balance a Product Owner must have between working with stakeholders, end users, customers AND working with the Scrum team AND product backlog refinement. \n The session concludes with the presenter sharing a Product Owner persona sheet. This persona sheet measures product owners across the 5 attributes mentioned above and presents a narrative on their core strengths and risks.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "time": "9:30 am - 10:30 am",
                "room": "Powhatan Room",
                "category": "Agile Methods",
                "speakers": ["Richard Cheng"],
                "image": ["assets/Headshots/rcheng.jpg"],
                "additional-materials": "/app"
            }
        ]
    };
}