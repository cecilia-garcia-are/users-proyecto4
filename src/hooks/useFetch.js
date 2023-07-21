import { useState } from "react"
import axios from "axios" 


const useFetch = (baseUrl, setCloseForm) => {

    const [infoApi, setInfoApi] = useState()
    const [isLoading, setIsLoading] = useState(true)
//GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        setIsLoading(true)
        axios.get(url)
        .then(resp => setInfoApi(resp.data))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
        /*
        fetch (url)
        .then(resp => resp.json())
        .then(dara => setInfoApi(data)
        .catch(err => console.error(err))
        */

    }

    //POST

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        setIsLoading(true)
        axios.post(url, data)
        .then(resp => {
            console.log (resp.data)
            setInfoApi([...infoApi, resp.data])
            setCloseForm(true)
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }

    //DELETE

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        setIsLoading(true)
        axios.delete (url)
        .then(resp => {
            console.log (resp.data)
            const infoApiFiltered = infoApi.filter(e => e.id !== id)
            setInfoApi(infoApiFiltered)
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))

    }

    //UPDATE

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        setIsLoading(true)
        axios.patch(url, data)
        .then(resp => {
            console.log(resp.data)
            const infoApiMapped = infoApi.map(e => e.id === id ? resp : e)
            setInfoApi(infoApiMapped)
            setCloseForm(true)
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi, isLoading]
  
}

export default useFetch