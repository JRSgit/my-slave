import bcrypt from 'bcryptjs'

export const passwordHash = async (password) => {
  return bcrypt.hash(password, 10).then(function (hash) {
    return hash
  })
}

export const verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash).then(function (result) {
    return result
  })
}