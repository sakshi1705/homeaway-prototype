import axios from 'axios';
import Registeruser from '../components/Registeruser';
import AddPropertyDetails from '../components/AddPropertyDetails';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';



export const LOGINT="LOGINT";

const ROOT_URL="http://localhost:3001";

// export const loginUser = userData => dispatch => {
//     axios
//       .post('http://localhost:3001/login', userData)
//       .then(res => {
//         // Save to localStorage
//         const { token } = res.data;
//         // Set token to ls
//         localStorage.setItem('jwtToken', token);
//         // Set token to Auth header
//         setAuthToken(token);
//         // Decode token to get user data
//         const decoded = jwt_decode(token);
//         // Set current user
//         dispatch(setCurrentUser(decoded));
//       })
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };
//   export const setCurrentUser = decoded => {
//     return {
//       type: SET_CURRENT_USER,
//       payload: decoded
//     };
//   };
  
export function logint(values,history){
    console.log("VALUES: " + JSON.stringify(values));
    const request = axios
        .post(`${ROOT_URL}/login/${values.username}/${values.password}`,values, { withCredentials: true })
        .then((res) => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            console.log("decoded token: " + JSON.stringify(decoded));
            history.push("/");
            // Set current user
            
        });
        return {
            type: LOGINT,
            payload: null
        };
 
   // axios.defaults.withCredentials=true;
    // const request=axios.post(`${ROOT_URL}/login/${values.username}/${values.password}`,values)
    // .then((res)=>callback(res));

    // return {
    //     type:LOGINT,
    //     payload:request
    // }
}
export function register(values,callback){
    console.log("values in action register");
    console.log(values);
    const request =axios.post(`${ROOT_URL}/register/`,values).then((res)=>callback(res));
    return {
        type : Registeruser,
        payload : request
    }
}
export function property(values,callback){
    console.log("values in action register");
    console.log(values);
    const request =axios.post(`${ROOT_URL}/AddPropertyDetails/`,values).then((res)=>callback(res));
    return {
        type : AddPropertyDetails,
        payload : request
    }
}
