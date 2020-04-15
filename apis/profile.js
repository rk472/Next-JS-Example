import axios from "axios";


const profileAPI = (userid) => {
    return axios.get(
        'https://flutter.smarttersstudio.com/test/profile.php?id='+userid
    ).then((response)=>{
        console.log('Response',response);

        return {data: response.data};
    }).catch((error)=>{
        console.log('Errror',error.response);
        return {data: 'Some error occured'};
    });
};

export default profileAPI;