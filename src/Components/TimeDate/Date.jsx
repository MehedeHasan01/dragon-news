import moment from "moment";
import { useEffect, useState } from "react";


const Date = () => {
    const [currentDate, setCurrentDate] = useState(moment().format('MMMM D YYYY'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment().format('MMMM D, YYYY'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>{currentDate}</p>
        </div>
    );
};

export default Date;