import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:5000/service')
                .then(result => {
                    const res = result.data;
                    if (res.length > 0) {
                        setServices(result.data);
                    }
                })
        }
        fetchData()
    }, [])

    return services;
}

export default useServices;