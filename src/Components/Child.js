import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "./UserContext";

export default function Child(props) {

    const { register, formState: { errors } } = useForm();
    const userCtx = useContext(userContext);

    return (
        <>
            <div>
                <input {...register("lastName", { required: true, maxLength: 15 })}
                    type="text" placeholder="first name"
                    onChange={e => {
                        if (userCtx.arr[props.ind] === undefined) {
                            userCtx.arr.push({ Name: "", Tz: "", BirthDate: "" })
                        }
                        userCtx.arr[props.ind].Name = (e.target.value)
                    }} />
                {errors?.lastName?.type === "required" && (<p>required field</p>)}
                {errors?.lastName?.type === "maxLength" && (<p>the max length is 15</p>)}
            </div>


            <div>
                <input {...register("ChildId", { required: true, minLength: 9, maxLength: 9 })}
                    type="text" placeholder="ID"
                    onChange={e => {
                        if (userCtx.arr[props.ind] === undefined) {
                            userCtx.arr.push({ Name: "", Tz: "", BirthDate: "" })
                        }
                        userCtx.arr[props.ind].Tz = (e.target.value)
                    }} />
                {errors?.ID?.type === "required" && (<p>required field</p>)}
                {errors?.id?.type === "maxLength" && errors?.ID?.type === "minLength" && (<p>the max and min length is 9</p>)}
            </div>


            <div>
                <input {...register("birthDate", { required: true, maxLength: 8 })}
                    type="date" placeholder="birthDate"
                    onChange={e => {
                        if (userCtx.arr[props.ind] === undefined) {
                            userCtx.arr.push({ Name: "", Tz: "", BirthDate: "" })
                        }
                        userCtx.arr[props.ind].BirthDate = (e.target.value)
                    }} />
                {errors?.birthDate?.type === "required" && (<p>required field</p>)}
            </div>
        </>
    )
}