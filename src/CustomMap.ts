import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(user: User) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.long
            }
        })
    }

    addCompanyMarker(company: Company) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lng: company.location.long,
                lat: company.location.lat
            }
        })
    }
}