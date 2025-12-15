import {faker} from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    companyPhrase: string;
    location: {
        long: number;
        lat: number;
    };
    color: string = "red";

    constructor() {
        this.companyName = faker.company.name();
        this.companyPhrase = faker.company.catchPhraseNoun();
        this.location = {
            long: faker.location.longitude(),
            lat: faker.location.latitude()
        }
    }

    markerContent() {
        return `
        Company Name: ${this.companyName}
        Company Phrase: ${this.companyPhrase}
        `;
    }
}