import axios from 'axios';

const uploadHeroes = (file) => axios
.post(`http://localhost:1080/api/heroes/import/`, file)
.then((response) => ({ response }));


const fetchListHeroes = (filter) => axios
.get(`http://localhost:1080/api/heroes/`, filter)
.then((response) => ({ response }));


const updateHeroes = (id, heroes) => axios
.patch(`http://localhost:1080/api/heroes/${id}/`, heroes)
.then((response) => ({ response }));

const fetchHeroes = (id) => axios
.get(`http://localhost:1080/api/heroes/${id}/`)
.then((response) => ({ response }));

const exportHeroes = (filter) => axios
.post(`http://localhost:1080/api/heroes/export/`, filter)
.then((response) => ({ response }));


const createHeroes = (heroes) => axios
.post(`http://localhost:1080/api/heroes/`, heroes)
.then((response) => ({ response }));


const removeHeroes = (ids) => axios
.delete(`http://localhost:1080/api/heroes/?ids=${ids}`, ids)
.then((response) => ({ response }));

const heroesApis = {
     createHeroes,
     updateHeroes,
     fetchListHeroes,
     uploadHeroes,
     fetchHeroes,
     exportHeroes,
     removeHeroes,
};

export default heroesApis;
