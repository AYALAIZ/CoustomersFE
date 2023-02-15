import React from 'react';
import { Route, Routes} from 'react-router-dom';
import NewUserForm from './NewUserForm';
import Home from './Home';
import Instrucion from './Instruction';
import Completion from './Completion';

export default function MyRouter() {

    return (
        <div>
            <Home/>
            <Routes>
                <Route path='/user' element={<NewUserForm />} />
                <Route path='/instruction' element={<Instrucion />} />
                <Route path='/completion' element={<Completion />} />
            </Routes>
        </div>
    );
}