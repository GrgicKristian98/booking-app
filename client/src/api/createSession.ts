import { TSession } from "../types/TSession";
import { API_URL } from "./config";

function mapSession(object: any): TSession {
    return ({
        id: object.id,
        day: object.day,
        open: object.open,
        start_time: object.start_time,
        end_time: object.end_time,
        client_email: object.client_email,
        client_name: object.client_name,
    });
}

export async function createSession(session: TSession) {
    console.log(JSON.stringify({ session }));
    const response = await fetch(`${API_URL}/api/session`, {
        method: "POST",
        body: JSON.stringify({
            session
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return mapSession(await response.json());
}