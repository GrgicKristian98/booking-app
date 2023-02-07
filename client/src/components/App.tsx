import { useState, useEffect } from "react";
import { getSessions } from "../api/getSessions";
import { TSession } from "../types/TSession";
import CreateSession from "./CreateSession";
import Sessions from "./Sessions";

function App() {
  const [sessions, setSessions] = useState<TSession[]>([]);

  function handleChange(newSession: TSession) {
    setSessions([...sessions, newSession]);
  }

  useEffect(() => {
    async function fetchSessions() {
      const allSessions = await getSessions();
      setSessions(allSessions);
    }
    fetchSessions();
  }, []);

  return (
    <div className="flex">
      <CreateSession handleChange={handleChange} />
      <Sessions sessions={sessions} />
    </div>
  );
}

export default App;
