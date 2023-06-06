import axios from "axios"
const baseUrl = "http://localhost:3002/notes"
interface NoteType {
    id: number;
    content: string;
    important: boolean;
}

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject: NoteType) => {
    return axios.post(baseUrl, newObject)
}

const update = ({ id, newObject }: { id: number, newObject: NoteType }) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = (id: number) => {
    return axios.delete(baseUrl, { data: { id: id } })
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    del: del
}