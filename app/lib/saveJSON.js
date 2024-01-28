const errors = []


export const saveErros = (er, path) => {
  errors.push({ path, error: er })

  console.log(errors)
}