import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

  constructor(public navCtrl: NavController) {

  }

    track: string = "All";

    sessionData = {
        "sessions": [{
                "title": "Product Owners with a Product Mindset",
                "descriptions": "The role of the product owner as part of a Scrum team is crutial, but often times underpowered. In both large and small organizations, product owners are not prepared or ill equipt to take on the role with a strong product focus. The result is that teams fend for themselves when it comes to delivering the right value in the right priority. In this interactive discussion, we will re-ground ourselves on the root purpose of the role and provide some practical ways operate effwctrively as a Product Owner with a Product Mindset.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "start-time": "Mon Jul 03 2018 9:30:00 GMT-0400 (EDT)",
                "end-time": "Mon Jul 03 2018 10:30:00 GMT-0400 (EDT)",
                "room": "Chesterfield Room",
                "category": "Agile Methods",
                "speaker": "Kevin Rosengren",
                "image": "",
                "additional-materials": "/app"
            },
            {
                "title": "The T-Shaped Scrum Team: Get in Shape for Your Future",
                "descriptions": "Agile teams today are being asked to do a whole lot more. The notion of a “T” shaped person was created Tim Brown (CEO of IDEO) coined it in the 1990s to describe the new breed of worker. I believe that scrum team members can contribute a lot more to the business than their standard role traditionally dictates. A team member critical and skeptical thinking can be used earlier in the process. Their other skills can be used to solve other problems within the business. Their role can stretch to include other aspects that intrigue them and keep them interested. We have team members who write product documentation, are scrum masters, are building infrastructure to support rapid release, are taking ownership for security and compliance to standards, are presenting the development process to customers, are visiting customer sites to research how people are using the product, are writing social media content, are devising internal communication strategies, are doing agile coaching, are creating personas and are using their natural skills and abilities where they are best suited to help move the business forward. In this track we will go over all the ways we can evolve into T Shape.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "start-time": "Mon Jul 03 2018 10:30:00 GMT-0400 (EDT)",
                "end-time": "Mon Jul 03 2018 11:30:00 GMT-0400 (EDT)",
                "room": "Spotsylvania Room",
                "category": "Agile Methods",
                "speaker": "Mary Thorn",
                "image": "",
                "additional-materials": "/app"
            },
            {
                "title": "Anyone Can Design",
                "descriptions": "Recently we’ve seen design’s recognition as key driver of business value and differentiation, from the competition, reach staggering new heights. High profile articles have been written, large acquisitions have taken place, and documentaries have been made but now that design is in the spotlight everyone wants to get involved. Like it or not (and you should definitely like it) design is no longer a solitary, heads down discipline and design can no longer only be done solely by Designers (with a capital D). To explore that perspective this talk would focus on three specific areas… • How to successfully plan and facilitate collaborative design sessions that could range from a brainstorm (a few hours) to a full design sprint (5 full days). • How to get non-Designers (Product, tech, business, etc…) engaged, comfortable, and excited about participating in the design process (and why that’s important). • A look at the tools and techniques the audience can start to implement immediately to make the above happen. How can they use things like conversation design, sketching, improv, critique, and research to arrive at a better solution that everyone is on board with and understands. Steven Garrity said “The process of pulling big ideas out of the minds of a team into concrete notes and sketches may be the most important skill a designer can offer.” and this session should help make designers more successful at doing just that.",
                "date": "Mon Jul 03 2018 16:33:12 GMT-0400 (EDT)",
                "start-time": "Mon Jul 03 2018 12:30:00 GMT-0400 (EDT)",
                "end-time": "Mon Jul 03 2018 13:30:00 GMT-0400 (EDT)",
                "room": "Powhatan Room",
                "category": "UX/Design",
                "speaker": "Scott Childs",
                "image": "",
                "additional-materials": "/app"
            }
        ]
    };
}
