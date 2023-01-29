import Courses from "./Courses";
import About from "./About";
import MainCourse from "./MainCourse";

const routes = [
    { path: "/courses", element: <Courses /> },
    { path: "/course/:courseID", element: <MainCourse /> },
    {
        path: "/about/*",
        element: <About />,
        children: [
            {
                path: "setting",
                element: <p style={{ textAlign: "center" }}>Setting</p>,
            },
            {
                path: "dashboard",
                element: <p style={{ textAlign: "center" }}>Dashboard</p>,
            },
        ],
    },
];
export default routes;
