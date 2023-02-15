import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { userContext } from './UserContext';
import Child from './Child'
import './../style/ComponentStyle.css'

export default function NewUserForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(userContext);
    const [, setParentID] = useState();

    const addUser = async () => {
        const data = {
            id: 0, firstName: userCtx.firstName, lastName: userCtx.lastName, tz: userCtx.id,
            dateOfBirth: userCtx.date, gender: "1", hmo: 1
        }
        axios.post('https://localhost:44345/api/User', data)
            .then(async res => {

                let response = await axios.get(`https://localhost:44345/api/User`)
                let currentUser = response.data.find(users => users.tz === userCtx.id);

                setParentID(currentUser.id)

                console.log("catch parent id" + currentUser.id + " " + userCtx.arr.length)
                addChildren(userCtx, currentUser);
            })
            .catch(err => {
                console.error(err.response.data);
            })

            .catch(error => {
                console.error(error.response.data);
            })

        navigate(`/Completion`);
    }

    const addChildren = (userCtx, currentUser) => {
        for (let i = 0; i < userCtx.numOfChildren; i++) {
            let Children = {
                name: userCtx.arr[i].Name,
                tz: userCtx.arr[i].Tz,
                birthDate: userCtx.arr[i].BirthDate,
                parentId: currentUser.id,
            };

            axios.post('https://localhost:44345/api/Children', Children)

                .then(res => { console.log(res); })

                .catch(err => {
                    console.error(err.response.data);
                });
        }
    }

    const onSubmit = () => {
        addUser()
    }

    return (
        <div className="bigDiv d-grid gap-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("firstName", { required: true, maxLength: 15 })}
                        type="text" placeholder="first name" className="form form-control" defaultValue={userCtx.firstName}
                        onChange={e => userCtx.setFirstName(e.target.value)} />
                    {errors?.firstName?.type === "required" && (<p>required field</p>)}
                    {errors?.firstName?.type === "maxLength" && (<p>the max length is 15</p>)}
                </div>

                <div>
                    <input {...register("lastName", { required: true, maxLength: 15 })}
                        type="text" placeholder="last name" className="form form-control" defaultValue={userCtx.lastName}
                        onChange={e => userCtx.setLastName(e.target.value)} />
                    {errors?.lastName?.type === "required" && (<p>required field</p>)}
                    {errors?.lastName?.type === "maxLength" && (<p>the max length is 15</p>)}
                </div>

                <div>
                    <input {...register("id", { required: true, minLength: 9, maxLength: 9 })}
                        type="text" placeholder="ID" className="form form-control" defaultValue={userCtx.Tz}
                        onChange={e => userCtx.setId(e.target.value)} />
                    {errors?.ID?.type === "required" && (<p>required field</p>)}
                    {errors?.id?.type === "maxLength" && errors?.ID?.type === "minLength" && (<p>the max and min length is 9</p>)}
                </div>

                <div>
                    <input {...register("birthDate", { required: true })}
                        type="date" placeholder="date of birth " className="form form-control" defaultValue={userCtx.BirthDate}
                        onChange={e => userCtx.setDate(e.target.value)} />
                    {errors?.birthDate?.type === "required" && (<p>required field</p>)}
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" >
                        male
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" >
                        female
                    </label>
                    {errors?.gender?.type === "required" && (<p>required field</p>)}
                </div>

                <select {...register("hmo", { required: true })}
                    className="form form-control" onChange={e => userCtx.setHMO(e.target.value)} value={userCtx.hmo} placeholder="aaa">
                    <option name="hmo" value="1">macabi</option>
                    <option name="hmo" value="2" >leumit</option>
                    <option name="hmo" value="3">clalit</option>
                    <option name="hmo" value="4">meuchedet</option>
                    {errors?.hmo?.type === "required" && (<p>required field</p>)}
                </select>

                <div>children:
                    <input
                        type="number" className="btn-outline-primary" min={0} onChange={e => {
                            userCtx.setNumOfChildren(parseInt(e.target.value))
                            for (let i = 0; i < userCtx.numOfChildren; i++) {
                                userCtx.arr.push({ Name: `+${i}`, Tz: "", BirthDate: "" })
                            }
                        }}>
                    </input>
                </div>

                <div>
                    {Array(userCtx.numOfChildren)
                        .fill(0)
                        .map((_, i) =>
                        (
                            <Child ind={i} key={i} />
                        ))}
                </div>

                <div>
                    <button type="submit" className="btn btn-outline-primary" onClick={e => onSubmit()}>save</button>
                </div>
            </form>
        </div>
    )
}


