/**
 * Student List
 * 
 * Teacher List
 */
import { fetchListData } from './model';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';



class App extends React.Component {
  state = {
    studentList: [],
    teacherList: []
  }
  async componentDidMount() {
    const res = await fetchListData('student')
    const res2 = await fetchListData('teacher')
    this.setState({
      studentList: res.data,
      teacherList: res2.data
    })
  }
  removeStudent = (id) => {
    this.setState({
      studentList: this.state.studentList.filter(item => item.id !== id)
    })

  }
  addLike = (id) => {
    this.setState({
      teacherList: this.state.teacherList.map(item => {
        if (item.id === id) {
          item.like++
        }
        return item
      })
    })
  }
  render() {
    const { teacherList, studentList } = this.state
    return (
      <div>
        <StudentList data={studentList} removeStudent={this.removeStudent} />
        <TeacherList data={teacherList} addLike={this.addLike} />
      </div>
    )
  }
}
export default App