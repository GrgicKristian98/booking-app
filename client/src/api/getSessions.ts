import { TSession } from "../types/TSession";
import { API_URL } from "./config";

function mapSessions(data: []): TSession[] {
    const sessions: TSession[] = [];
    data.forEach((object: any) => {
        sessions.push({
            id: object.id,
            day: object.day,
            open: object.open,
            start_time: object.start_time,
            end_time: object.end_time,
            client_email: object.client_email,
            client_name: object.client_name,
        })
    });
    return sessions;
}

export async function getSessions(): Promise<TSession[]> {
    const response = await fetch(`${API_URL}/api/sessions`);
    return mapSessions(await response.json());
}