import React, { useContext } from "react";
import { userContext } from "./UserContext";

export default function Instrucion() {

    const userCtx = useContext(userContext);

    return (
        <>
            <h3> hello {userCtx.firstName} {userCtx.lastName}</h3>
            <p>
                We are happy to have you join us
            </p>
            <p>
                You must fill in the requested details in the appropriate fields
            </p>
            <p>
                Please note: all details are required fields
            </p>
        </>
    )
}