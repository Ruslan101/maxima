import React from 'react';
import { useLocation } from "react-router-dom";

function Error_404() {
    var location = useLocation();
    
    return (<h1>Error 404<br />Not found for <code>{location.pathname}</code></h1>);
}

export default Error_404;