import moment from "moment";
import { useEffect, useState } from "react";


const Time = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss A'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('h:mm:ss A'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>{currentTime}</p>
        </div>
    );
};

export default Time;