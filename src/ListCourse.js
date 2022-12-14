import React, { useState } from 'react'
import Course from './Course'
export default function ListCourse({myCourseList}) {
    const [ detailId, updateDetailId ] = useState('');
    function handleCourseClick(id) {
        console.log('Course id'+id)
        updateDetailId(id);
    }
    const listCourseHtml = myCourseList.map((course) =>
        <div key={course.id}>
            <Course myCourse={course} handleCourseClick={handleCourseClick} />
        </div>
    );

    function getDetailCourseHtml(){
        const detailCourse=myCourseList.find(course=>course.id===detailId);
        if (detailCourse) {
            return (<div>
            <h4>Detail Course</h4>
            <div>Code: {detailCourse.code}</div>
            <div>Name: {detailCourse.name}</div>
            <div>Description: {detailCourse.description}</div>
            </div>
            );
        } 
            return <></>;
    }
    

    return (
        <div>
         {listCourseHtml}
         {getDetailCourseHtml}
        </div>
    )
}
