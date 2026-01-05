import React, { useContext } from "react";
import Card from "./components/Card";
import { UserContext } from "./context/UserContext";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ScheduleIcon from "@mui/icons-material/Schedule";
const DashBoard = () => {
  const context = useContext(UserContext);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <React.Fragment>
      <div className="w-full max-w-6xl px-4 mx-auto my-6">
        <div className="mb-8 text-center mt-8 md:text-center ">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {context.currentUser.name}!
          </h1>
          <p className="text-gray-600 font-semibold md:text-center">Today is {today}</p>
          <div className="border-2 rounded-4xl max-w-20 mx-auto my-4 bg-gradient-to-r from-purple-600 to-blue-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
          <Card>
            <div className="flex items-center justify-between gap-20 ">
              <p className="text-sm font-semibold text-gray-600 mb-10">
                Profile
              </p>
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-5">
                <PersonOutlineIcon className="text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {context.currentUser.name}
            </h1>
            <p className="text-mg mt-2 flex justify-start items-center gap-2">
              {" "}
              <TaskAltIcon className="text-green-500" />
              Active User
            </p>
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-20 ">
              <p className="text-sm font-semibold text-gray-600 mb-10">Email</p>
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-5">
                <EmailIcon className="text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {context.currentUser.email}
            </h1>

            <p className="text-mg mt-2 flex justify-start items-center gap-2">
              {" "}
              <TaskAltIcon className="text-green-500" />
              Verified Account
            </p>
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-20 ">
              <p className="text-sm font-semibold text-gray-600 mb-10">
                Last Login
              </p>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-5">
                <CalendarTodayIcon className="text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Today</h1>
            <p className="text-mg mt-2 flex justify-start items-center gap-2">
              {" "}
              <ScheduleIcon className="text-blue-500" />
              Session Active
            </p>
          </Card>
        </div>

        <Card>
          <div className="flex justify-start items-center gap-4 ">
            <div className="w-8 h-8 bg-gradient-to-br flex justify-center items-center bg-purple-500 rounded-lg">
              {" "}
              <MonitorHeartIcon className="bg-purple-500 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
          </div>
          <p className="text-gray-900 font-medium my-4">
            Your recent dashboard activities
          </p>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 pb-4 border rounded-2xl border-gray-200 py-4 pl-4  bg-green-50 last:border-b-0 last:pb-0">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-md font-semibold text-gray-900 mb-0.5">
                  Successfully logged in
                </p>
                <p className="text-md text-gray-600 mb-1 my-2 ">
                  <ScheduleIcon className="text-blue-500 mr-2" />
                  Just now
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border rounded-2xl border-gray-200 bg-blue-50 py-4 h-20 pl-4 last:border-b-0 last:pb-0">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1.5"></div>
              <div className="flex-1 min-w-0">
                <p className="text-md font-semibold text-gray-900 mb-0.5">
                  Dashboard accessed
                </p>
                <p className="text-mg text-gray-600 mb-1 gap-2">
                  <ScheduleIcon className="text-blue-500 mr-2" />
                  Just now
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
