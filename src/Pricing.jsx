import { useState } from "react";
import { ArrowRight } from "lucide-react";
import './UserSlider.css';

export default function Form() {
  const hr360plans = {
    profile: { icon: <img src="/modules/profile.svg" alt="profile" width={100} />, title: "Profile", price: 10 },
    attendance: { icon: <img src="/modules/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 15 },
    tasks: { icon: <img src="/modules/task.svg" alt="tasks" width={100} />, title: "Tasks", price: 20 },
    forms: { icon: <img src="/modules/forms.svg" alt="forms" width={100} />, title: "Leaves", price: 25 },
  };

  const iteamplans = {
    profile: { icon: <img src="/modules/profile.svg" alt="profile" width={100} />, title: "Profile", price: 12 },
    attendance: { icon: <img src="/modules/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 18 },
    tasks: { icon: <img src="/modules/task.svg" alt="tasks" width={100} />, title: "Tasks", price: 22 },
    forms: { icon: <img src="/modules/forms.svg" alt="forms" width={100} />, title: "Forms", price: 28 },
  };

  const easyformsplans = {
    forms: { icon: <img src="/modules/forms.svg" alt="forms" width={100} />, title: "Forms", price: 30 },
  };

  const leadkonnektplans = {
    profile: { icon: <img src="/modules/profile.svg" alt="profile" width={100} />, title: "Profile", price: 14 },
    attendance: { icon: <img src="/modules/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 16 },
    tasks: { icon: <img src="/modules/task.svg" alt="tasks" width={100} />, title: "Tasks", price: 25 },
    forms: { icon: <img src="/modules/forms.svg" alt="forms" width={100} />, title: "Forms", price: 35 },
  };

  const amsplans = {
    attendance: { icon: <img src="/modules/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 8 },
  };

  const educationplans = {
    ischool: { icon: <img src="/modules/ischool.png" alt="ischool" width={100} />, title: "iSchool", price: 8 },
    ischoolforme: { icon: <img src="/modules/ischoolforme.png" alt="ischoolforme" width={100} />, title: "iSchool For Me", price: 8 },
    easyfee: { icon: <img src="/modules/easyfee.png" alt="easyfee" width={100} />, title: "EasyFee", price: 8 },
  };

  const [selectedhr360Plans, setSelectedhr360Plans] = useState([]);
  const [selectediteamPlans, setSelectediteamPlans] = useState([]);
  const [selectedeasyformsPlans, setSelectedeasyformsPlans] = useState([]);
  const [selectedleadkonnektPlans, setSelectedleadkonnektPlans] = useState([]);
  const [selectedamsPlans, setSelectedamsPlans] = useState([]);
  const [selectededucationPlans, setSelectededucationPlans] = useState([]);

  const [Users, setUsers] = useState(5); // Global Users slider state

  const handlePlanSelect = (plan, selectedPlans, setSelectedPlans) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter((p) => p !== plan)); // Remove plan if already selected
    } else {
      setSelectedPlans([...selectedPlans, plan]); // Add plan if not selected
    }
  };

  // Calculate total cost based on selected plans and users
  const calculateTotal = () => {
    const total = [
      ...selectedhr360Plans,
      ...selectediteamPlans,
      ...selectedeasyformsPlans,
      ...selectedleadkonnektPlans,
      ...selectedamsPlans,
      ...selectededucationPlans,
    ].reduce((sum, plan) => {
      let planData;
      if (hr360plans[plan]) planData = hr360plans[plan];
      else if (iteamplans[plan]) planData = iteamplans[plan];
      else if (easyformsplans[plan]) planData = easyformsplans[plan];
      else if (leadkonnektplans[plan]) planData = leadkonnektplans[plan];
      else if (amsplans[plan]) planData = amsplans[plan];
      else if (educationplans[plan]) planData = educationplans[plan];

      return sum + (planData ? planData.price : 0);
    }, 0);

    return total * Users; // Multiply by number of users
  };

  // Calculate user range dynamically
  const userRangeStart = Users;
  const userRangeEnd = Users + 5;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Users Slider */}
        <div className="mt-3 w-full max-w-lg mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">Select Users</h2>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={Users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center mt-2 text-sm">
            Users: {userRangeStart} - {userRangeEnd}
          </p>
        </div>

        <br /><br /><br />
        <h2 className="text-4xl font-bold tracking-tight text-center">Choose Modules</h2>

        {/* HR360 Plan Cards */}
        <img src="/products/hr360.svg" width={150} alt="hr360" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
          {Object.keys(hr360plans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectedhr360Plans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectedhr360Plans, setSelectedhr360Plans)}
            >
              <Plan icon={hr360plans[plan].icon} title={hr360plans[plan].title} />
            </div>
          ))}
        </div>

        {/* Iteam Plan Cards */}
        <img src="/products/iteam.svg" width={150} alt="iteam" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
          {Object.keys(iteamplans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectediteamPlans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectediteamPlans, setSelectediteamPlans)}
            >
              <Plan icon={iteamplans[plan].icon} title={iteamplans[plan].title} />
            </div>
          ))}
        </div>

        {/* EasyForms Plan Cards */}
        <img src="/products/easyforms.svg" width={150} alt="easyforms" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(easyformsplans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectedeasyformsPlans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectedeasyformsPlans, setSelectedeasyformsPlans)}
            >
              <Plan icon={easyformsplans[plan].icon} title={easyformsplans[plan].title} />
            </div>
          ))}
        </div>

        {/* LeadKonnekt Plan Cards */}
        <img src="/products/leadkonnekt.svg" width={150} alt="leadkonnekt" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(leadkonnektplans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectedleadkonnektPlans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectedleadkonnektPlans, setSelectedleadkonnektPlans)}
            >
              <Plan icon={leadkonnektplans[plan].icon} title={leadkonnektplans[plan].title} />
            </div>
          ))}
        </div>

        {/* AMS Plan Cards */}
        <img src="/products/ams.svg" width={150} alt="ams" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(amsplans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectedamsPlans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectedamsPlans, setSelectedamsPlans)}
            >
              <Plan icon={amsplans[plan].icon} title={amsplans[plan].title} />
            </div>
          ))}
        </div>

        {/* Education Plan Cards */}
        {/* <img src="/products/ams.svg" width={150} alt="education" className="mx-auto"/> */}
        <h2 className="text-4xl font-bold tracking-tight text-center mt-5 mb-5 bg-gradient-to-r from-[#277EE0] to-[#F6717B] text-transparent bg-clip-text">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(educationplans).map((plan) => (
            <div
              key={plan}
              className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                selectededucationPlans.includes(plan)
                  ? "border-[#172554] bg-[#172554]/10"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelect(plan, selectededucationPlans, setSelectededucationPlans)}
            >
              <Plan icon={educationplans[plan].icon} title={educationplans[plan].title} />
            </div>
          ))}
        </div>

        <hr className="my-3 mx-auto" />

        {/* Total and Button */}
        <div className="flex justify-end mt-6">
          <button
            className={`flex gap-4 items-center px-6 py-3 rounded-lg font-semibold text-lg text-white w-full sm:w-auto ${
              calculateTotal() > 0
                ? "bg-[#172554] hover:bg-[#172554]"
                : "bg-[#172554] hover:bg-[#172554]"
            }`}
          >
            {calculateTotal() > 0 ? (
              <>Proceed with selected plan - Total: ${calculateTotal().toFixed(2)}</>
            ) : (
              <>Create your plan</>
            )}
            <ArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
}

function Plan({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}
