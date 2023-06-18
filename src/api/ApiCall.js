import axios from "axios"
export const signup = body => {
    return axios.post('/signup', body)
}
export const signin = creds => {
    return axios.post('/auth',{},{ auth : creds })
}
export const saveProfile = creds =>{
}
// export const getProfile= profile =>{
//     return axios.get('/profile',)
// }