import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./Header";
import routes from "./routes";

const Sablearn = () => {
    const router = useRoutes(routes);
    return (
        <>
            <Header />
            {/* <Routes>
                  <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseID" element={<MainCourse />} />
                <Route path="/about/*" element={<About />}>
                    <Route
                        path="setting"
                        element={<p style={{ textAlign: "center" }}>Setting</p>}
                    />
                    <Route
                        path="dashboard"
                        element={
                            <p style={{ textAlign: "center" }}>Dashboard</p>
                        }
                    />
                </Route>
            </Routes> */}
            {router}
        </>
    );
};

export default Sablearn;
