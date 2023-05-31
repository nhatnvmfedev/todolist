import Api from './Api'
const END_POINT = 'blogs'
export default {
  edit (id, params) {
    return Api.put(`${END_POINT}/${id}`, {
      ...params
    })
  }
}
