import axios from 'axios';

const fetchItems = (id) => axios
.get(`http://localhost:1080/api/items/${id}/`, id)
.then((response) => ({ response }))


const removeItems = (ids) => axios
.delete(`http://localhost:1080/api/items/?ids=${ids}`, ids)
.then((response) => ({ response }))

const uploadItems = (file) => axios
.post(`http://localhost:1080/api/items/import/`, file)
.then((response) => ({ response }))


const updateItems = (id, items) => axios
.patch(`http://localhost:1080/api/items/${id}/`, items)
.then((response) => ({ response }))


const createItems = (items) => axios
.post(`http://localhost:1080/api/items/`, items)
.then((response) => ({ response }))


const fetchListItems = (filter) => axios
.get(`http://localhost:1080/api/items/`, filter)
.then((response) => ({ response }))

const exportItems = (filter) => axios
.post(`http://localhost:1080/api/items/export/`, filter)
.then((response) => ({ response }))

const itemsApis = {
     uploadItems,
     fetchItems,
     createItems,
     updateItems,
     exportItems,
     fetchListItems,
     removeItems,
};

export default itemsApis;
