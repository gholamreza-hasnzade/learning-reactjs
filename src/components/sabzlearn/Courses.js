import React, { useState } from "react";
import coursesData from "./CoursesData";
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState(coursesData);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 40,
            }}
        >
            {courses.map((course) => (
                <Course key={course.id} {...course} />
            ))}
        </div>
    );
};

export default Courses;
