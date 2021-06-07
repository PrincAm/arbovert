import React, { useEffect } from 'react'

import '../styles/ThanksMessage.css'

const ThanksMessage = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.type = "text/javascript";
        script1.innerHTML = "var seznam_cId = 100078161; var seznam_value = null;";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.type = "text/javascript";
        script2.src = "https://www.seznam.cz/rs/static/rc.js";
        script2.async = true
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        }
    }, []);

    return (
        <div className="ThanksMessage-formThank">Děkujeme Vám za dotaz! Budeme Vás brzy kontaktovat.</div>
    )
}

export default ThanksMessage;
