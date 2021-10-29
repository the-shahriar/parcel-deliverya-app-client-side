import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([])

    const getService = () => {
        axios.get('http://localhost:5000/services')
            .then(result => {
                setServices(result.data);
            })
    }

    useEffect(() => getService(), [])

    return [services, setServices];
}

export default useServices;