import axios from 'axios'
import { saveErrJson, saveErros } from '../lib/saveJSON'

const api = axios.create({ baseURL: "http://localhost:3000/api/" })


export const login = async (data) => {
  try {
    const res = await api.post('session', { data })
    return res.data
  } catch (err) {
    console.log(err)
    return err.code
  }
}

export const findUser = async (id) => {
  try {
    const res = await api.get(`users/${id}`)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const Store = async (path, data) => {
  try {
    const res = await api.post(`${path}`, data)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const getDados = async (path, id) => {
  try {
    const res = await api.get(`${path}/${id}`)
    return res.data
  } catch (err) {
    return err.message.data
  }
}

export const getMonth = async (month, id) => {
  try {
    const res = await api.get()
  } catch (err) {
    return res.message.data
  }
}

export const deleteItems = async (titulo, id) => {
  const path = titulo.toLowerCase()
  const Id = parseInt(id)
  try {
    const res = await api.delete(`${path}/${Id}`)
    return res.data
  } catch (err) {
    return res.message.data
  }
}