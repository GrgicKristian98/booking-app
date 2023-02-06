import { TSession } from "../types/TSession";
import { API_URL } from "./config";

export async function createSession(session: TSession) {
    console.log(JSON.stringify({session}));
    const response = await fetch(`${API_URL}/api/session`, {
        method: "POST",
        body: JSON.stringify({
            session
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.json();
}