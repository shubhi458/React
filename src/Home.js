import React from 'react';
import {
    Link
  } from "react-router-dom";

export default () => {
    return(<div>
        <h1>Welcome to homke screen <Link to="/login">Go to Login</Link></h1>
    </div>)
}