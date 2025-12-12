import {faker} from '@faker-js/faker';

export class Company {
    companyName: string;
    companyPhrase: string;
    location: {
        long: number;
        lat: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.companyPhrase = faker.company.catchPhraseNoun();
        this.location = {
            long: faker.location.longitude(),
            lat: faker.location.latitude()
        }
    }
}