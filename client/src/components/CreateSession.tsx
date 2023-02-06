import { useState } from "react";
import { createSession } from "../api/createSession";
import { TSession } from "../types/TSession";

function CreateSession() {
    const [session, setSession] = useState<TSession>({
        day: "",
        open: false,
        start_time: "",
        end_time: "",
        client_email: "",
        client_name: "",
    });

    async function handleCreateSession(e: React.FormEvent) {
        e.preventDefault();
        await createSession(session);
    }

    function handleDayValuehange(e: React.ChangeEvent<HTMLInputElement>) {
        setSession({
            ...session,
            day: e.target.value,
        });
    }

    function handleStartTimeValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSession({
            ...session,
            start_time: e.target.value,
        });
    }

    function handleEndTimeValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSession({
            ...session,
            end_time: e.target.value,
        });
    }

    function handleOpenValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { checked } = e.target;
        setSession({
            ...session,
            open: checked,
        });
    }

    function handleClientEmailValueChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setSession({
            ...session,
            client_email: e.target.value,
        });
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
            <div className="max-w-md">
                <form onSubmit={handleCreateSession}>
                    <div className="grid grid-cols-1 gap-6">
                        <h2 className="text-2xl font-bold">Create a session</h2>
                        <div className="w-full">
                            <label className="text-black text-base font-medium">
                                Session date
                                <input
                                    value={session.day}
                                    onChange={handleDayValuehange}
                                    type="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                        font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </label>
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <label className="text-black text-base font-medium">
                                    Start time
                                    <input
                                        value={session.start_time}
                                        onChange={handleStartTimeValueChange}
                                        type="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                            font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <label className="text-black text-base font-medium">
                                    End time
                                    <input
                                        value={session.end_time}
                                        onChange={handleEndTimeValueChange}
                                        type="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                            font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-black text-base font-medium">
                                Is the session open?
                                <input
                                    checked={session.open}
                                    onChange={handleOpenValueChange}
                                    type="checkbox"
                                    className="h-4 w-4 mt-1 float-left mr-2 cursor-pointer"
                                />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="text-black text-base font-medium">
                                Email
                                <input
                                    value={session.client_email}
                                    onChange={handleClientEmailValueChange}
                                    type="email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                        font-normal text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="example@address.com"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <button
                                className="rounded-md bg-[#6A64F1] hover:bg-[#554df1] py-3 px-8 text-center 
                                        text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateSession;
