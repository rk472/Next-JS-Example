import axios from "axios";


const postsAPI = (userid) => {
    return axios.get(
        'https://flutter.smarttersstudio.com/test/getMyPosts.php?id='+userid
    ).then((response)=>{
        console.log('Response',response.data);
        return {data: response.data};
    }).catch((error)=>{
        console.log('Errror',error.response);
        return {data: 'Some error occured'};
    });
};

export default postsAPI;