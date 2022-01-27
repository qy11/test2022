//
export function fetchListData(field) {
  let url = ''
  switch (field) {
    case "student":
      url = 'http://localhost:5002/getStudents'
      break;
    case 'teacher':
      url = 'http://localhost:5002/getTeachers'
      break
    default:
      break
  }
  return axios(url)
}