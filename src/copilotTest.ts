//function to get me salah times today
import axios from "axios";

export const getSalahTimes = async () => {
    const salahTimes = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=NewcastleUponTyne&country=United%20Kingdom&method=8",
    );
    return salahTimes;
    }
getSalahTimes().then((res) => console.log(res.data.data.timings));




