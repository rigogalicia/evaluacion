import axios from 'axios'
import configService from './config'

const edService = {}

edService.datosEvaluacion = function (usr, clave, ided) {
    return axios.post(`${configService.apiUrl}/${usr}/${clave}/${ided}`)
        .then(res => res.data)
}

export default edService

