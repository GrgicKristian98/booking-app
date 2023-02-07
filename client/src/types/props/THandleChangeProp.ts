import { TSession } from "../TSession"

export type THandleChangeProp = {
    handleChange: (newSession: TSession) => void;
}