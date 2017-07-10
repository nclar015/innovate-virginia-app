import { Injectable } from '@angular/core';

@Injectable()
export class SessionData {
    allSessions = {
        "keynote": [{
                "id": "11",
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
                "time": "10:45 am - 11:45 am",
                "room": "Henrico Ballroom B",
                "category": "DevOps/Testing",
                "speakers": ["Ryan Shriver", "Don Mills"],
                "image": ["assets/Headshots/rshriver.png","assets/Headshots/dmills.jpg"],
                "additional-materials": "/app"
            }
        ]
    };
}