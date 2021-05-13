import PersonName from "./PersonName";
import PersonAddress from "./PersonAddress";
import PersonLastName from "./PersonLastName";

function Person() {
    return <div>
        Person: <PersonName/> <PersonLastName/> <PersonAddress/>
    </div>
}

export default Person;