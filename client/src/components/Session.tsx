import { TSessionProp } from "../types/props/TSessionProp";

function Session(prop: TSessionProp){
    return (
        <div>User with email: {prop.session.client_email}</div>
    );
}

export default Session;
