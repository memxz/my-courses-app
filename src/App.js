import './App.css';
import Course from './Course';
import ListCourse from './ListCourse';

function App() {
 
  const myCourseList = [{
    id:'1',
    code : 'FOPCS',
    name :'Fundamental of Programming in c sharp',
    description :'FOPCS description'
  },

  {
    id:'2',
    code : 'oopcs',
    name: 'object oriented programming',
    description :'OOPCS description'
  }
];

  

  return (
    <div>
      <h1>my course list</h1>
      <ListCourse myCourseList={myCourseList} />


    </div>
  );
}

export default App;
