import { TSessionsProp } from "../types/props/TSessionsProp";
import Session from "./Session";

function Sessions(prop: TSessionsProp) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      <div className="max-w-md">
        {prop.sessions.map(session => (
          <Session key={session.id} session={session}/>
        ))}
      </div>
    </div>
  );
}

export default Sessions;
