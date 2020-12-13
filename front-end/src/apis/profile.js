import axios from 'axios';

const uploadProfile = (file) => axios
.post(`http://localhost:1080/api/profile/import/`, file)
.then((response) => ({ response }));


const fetchListProfile = (filter) => axios
.get(`http://localhost:1080/api/profile/`, filter)
.then((response) => ({ response }));


const updateProfile = (id, profile) => axios
.patch(`http://localhost:1080/api/profile/${id}/`, profile)
.then((response) => ({ response }));

const fetchProfile = (id) => axios
.get(`http://localhost:1080/api/profile/${id}/`, id)
.then((response) => ({ response }));

const exportProfile = (filter) => axios
.post(`http://localhost:1080/api/profile/export/`, filter)
.then((response) => ({ response }));


const createProfile = (profile) => axios
.post(`http://localhost:1080/api/profile/`, profile)
.then((response) => ({ response }));


const removeProfile = (ids) => axios
.delete(`http://localhost:1080/api/profile/?ids=${ids}`, ids)
.then((response) => ({ response }));

const profileApis = {
     createProfile,
     removeProfile,
     fetchProfile,
     uploadProfile,
     exportProfile,
     fetchListProfile,
     updateProfile,
};

export default profileApis;
