import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user1 = new User();
console.log(user1);

const company1 = new Company();
console.log(company1);

const map = new CustomMap("map");

map.addMarker(user1);
map.addMarker(company1);