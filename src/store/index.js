// import { configureStore } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

// export const studentsSlice = createSlice({
//   name: 'students',
//   initialState: {
//     students: [
//       { id: '1', name: 'Aaron Saunders', section: 'advanced' },
//       { id: '2', name: 'Andrea Saunders', section: 'beginners' },
//       { id: '3', name: 'Bill Smith', section: 'beginners' },
//       { id: '4', name: 'John Chambers', section: 'beginners' },
//       { id: '5', name: 'Joe Johnson', section: 'advanced' }
//     ]
//   },
//   reducers: {
//     // the second parameter here contains the type of the call and the data
//     // that was passed in is in a property called 'payload'
//     //
//     // object looks like this
//     // { type : 'students/addStudent', payload : { name: 'Aaron', section: 'Advanced'} }
//     //
//     // so we are using javascript destructuring to just get the payload, we could also
//     // access it differently, see updateStudent for and example

//   }
// });

import { Store } from 'pullstate';

const StudentStore = new Store({
  students: [
    { id: '1', name: 'Aaron Saunders', section: 'advanced' },
    { id: '2', name: 'Andrea Saunders', section: 'beginners' },
    { id: '3', name: 'Bill Smith', section: 'beginners' },
    { id: '4', name: 'John Chambers', section: 'beginners' },
    { id: '5', name: 'Joe Johnson', section: 'advanced' }
  ]
});

export const addStudent = student =>
  StudentStore.update(state => {
    state.students = [
      {
        name: student.name,
        id: Math.random() * 100 + '',
        section: student.section
      },
      ...state.students
    ];
  });

export const removeStudent = id =>
  StudentStore.update(state => {
    state.students = state.students.filter(student => student.id !== id);
  });

export const updateStudent = data =>
  StudentStore.update(state => {
    state.students = state.students.map(item => {
      if (item.id === data.id) {
        return {
          ...item,
          name: data.name,
          section: data.section
        };
      } else {
        return item;
      }
    });
  });

export default StudentStore;
