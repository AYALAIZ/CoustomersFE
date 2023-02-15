import React, { createContext, useState } from "react";

export const userContext = createContext();

export default function UserContext(props) {
    var arr = [{ Name: "", Tz: "", BirthDate: "" }]
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [gender, setGender] = useState('');
    const [hmo, setHMO] = useState(0);
    const [children, setChildren] = useState([]);
    const [nameChild, setNameChild] = useState('');
    const [childId, setChildId] = useState(0);
    const [dateChild, setDateChild] = useState(new Date().toLocaleDateString());
    const [numOfChildren, setNumOfChildren] = useState(0);


    return (
        <userContext.Provider value={{
            arr,
            firstName, setFirstName, lastName, setLastName, id, setId, date, setDate,
            gender, setGender, hmo, setHMO, children, setChildren, numOfChildren, setNumOfChildren
        }}>
            {props.children}
        </userContext.Provider>
    )
}