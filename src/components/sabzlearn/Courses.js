import React from "react";
import coursesData from "./CoursesData";
import Course from "./Course";

const Courses = () => {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 40,
            }}
        >
            {coursesData.map((course) => (
                <Course key={course.id} {...course} />
            ))}
        </div>
    );
};

export default Courses;
