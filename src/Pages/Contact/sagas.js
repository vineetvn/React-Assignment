import axios from 'axios'

export function* getSubmitDetails(action) {
    const data = {
        userName: action.name,
        email: action.mail,
        sub: action.sub,
        msg: action.msg
    }

    try {
        const postSubmit = yield axios.post('https://foodrecipejson.firebaseio.com/.json', data)
        yield console.log(postSubmit)
    }catch(err) {
        yield console.log(err)
    }
}