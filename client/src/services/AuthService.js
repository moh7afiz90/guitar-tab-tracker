import Api from '@/services/Api'

export default {
  regsiter (credentials) {
    return Api().post('register', credentials)
  }
}

