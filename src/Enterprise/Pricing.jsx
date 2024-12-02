import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

export default function Form() {
  const hr360plans = {
    profile: { icon: <img src="/modules/profile.png" alt="profile" width={100} />, title: "Profile", price: 10 },
    employees: { icon: <img src="/modules/employees.png" alt="employees" width={100} />, title: "Employees", price: 10 },
    attendance: { icon: <img src="/modules/attendance.png" alt="attendance" width={100} />, title: "Attendance", price: 15 },
    payroll: { icon: <img src="/modules/payroll.png" alt="payroll" width={100} />, title: "Payroll", price: 20 },
    organogram: { icon: <img src="/modules/organogram.png" alt="organogram" width={100} />, title: "Organogram", price: 20 },
    leaves: { icon: <img src="/modules/leaves.png" alt="leaves" width={100} />, title: "Leaves", price: 20 },
    calender: { icon: <img src="/modules/calender.png" alt="calender" width={100} />, title: "Calender", price: 20 },
    reports: { icon: <img src="/modules/reports.png" alt="reports" width={100} />, title: "Reports", price: 20 },
    remote_team: { icon: <img src="/modules/remote-team.png" alt="remote-team" width={100} />, title: "Remote Team", price: 20 },
    holidays: { icon: <img src="/modules/holidays.png" alt="holidays" width={100} />, title: "Holidays", price: 20 },
    shifts: { icon: <img src="/modules/shifts.png" alt="shifts" width={100} />, title: "Shifts", price: 20 },
    roles: { icon: <img src="/modules/roles.png" alt="roles" width={100} />, title: "Roles", price: 20 },
    users: { icon: <img src="/modules/employees.png" alt="users" width={100} />, title: "Users", price: 20 },
  };

  const iteamplans = {
    projects: { icon: <img src="/modules/projects.png" alt="projects" width={100} />, title: "Projects", price: 12 },
    modules: { icon: <img src="/modules/modules.png" alt="modules" width={100} />, title: "Modules", price: 12 },
    testing_QA: { icon: <img src="/modules/tesing-qa.png" alt="testing & QA" width={100} />, title: "Testing & QA", price: 12 },
    uat: { icon: <img src="/modules/uat.png" alt="uat" width={100} />, title: "UAT", price: 12 },
    test_results: { icon: <img src="/modules/test-result.png" alt="test results" width={100} />, title: "Test Results", price: 12 },
    tasks: { icon: <img src="/modules/task.png" alt="tasks" width={100} />, title: "Tasks", price: 22 },
    tickets: { icon: <img src="/modules/tickets.png" alt="tickets" width={100} />, title: "Tickets", price: 18 },
    reports: { icon: <img src="/modules/reports.png" alt="reports" width={100} />, title: "Reports", price: 28 },
    help_support: { icon: <img src="/modules/help-support.png" alt="help & support" width={100} />, title: "Help & Support", price: 28 },
  };

  const easyformsplans = {
    form_design: { icon: <img src="/modules/forms.png" alt="form design" width={100} />, title: "Form Design", price: 14 },
    integration: { icon: <img src="/modules/integration.png" alt="integration" width={100} />, title: "Integration", price: 16 },
    workflow: { icon: <img src="/modules/workflow.png" alt="workflow" width={100} />, title: "Workflow", price: 25 },
    approvals: { icon: <img src="/modules/approvals.png" alt="approvals" width={100} />, title: "Approvals", price: 35 },
    hierarchy: { icon: <img src="/modules/hierarchy.png" alt="hierarchy" width={100} />, title: "Hierarchy", price: 35 },
  };

  const leadkonnektplans = {
    customers: { icon: <img src="/modules/customers.png" alt="customers" width={100} />, title: "Customers", price: 30 },
    inquiries: { icon: <img src="/modules/inquries.png" alt="inquiries" width={100} />, title: "Inquiries", price: 30 },
    communication: { icon: <img src="/modules/communication.png" alt="communication" width={100} />, title: "Communication", price: 30 },
    integration: { icon: <img src="/modules/integration.png" alt="integration" width={100} />, title: "Integration", price: 30 },
    Follow_up: { icon: <img src="/modules/follow-up.png" alt="follow-up" width={100} />, title: "Follow-up", price: 30 },
  };

  const [selectedhr360Plans, setSelectedhr360Plans] = useState([]);
  const [selectediteamPlans, setSelectediteamPlans] = useState([]);
  const [selectedeasyformsPlans, setSelectedeasyformsPlans] = useState([]);
  const [selectedleadkonnektPlans, setSelectedleadkonnektPlans] = useState([]);

  const [Users, setUsers] = useState(5); // Global Users slider state

  const handlePlanSelect = (plan, selectedPlans, setSelectedPlans) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter((p) => p !== plan)); // Remove plan if already selected
    } else {
      setSelectedPlans([...selectedPlans, plan]); // Add plan if not selected
    }
  };

  useEffect(() => {
    // Check if the scroll position is greater than 0 (i.e., if the page is scrolled down)
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',  // Smooth scroll
      });
    }
  }, []);

  // Calculate total cost based on selected plans and users
  const calculateTotal = () => {
    const total = [
      ...selectedhr360Plans,
      ...selectediteamPlans,
      ...selectedeasyformsPlans,
      ...selectedleadkonnektPlans,
    ].reduce((sum, plan) => {
      let planData;
      if (hr360plans[plan]) planData = hr360plans[plan];
      else if (iteamplans[plan]) planData = iteamplans[plan];
      else if (easyformsplans[plan]) planData = easyformsplans[plan];
      else if (leadkonnektplans[plan]) planData = leadkonnektplans[plan];

      return sum + (planData ? planData.price : 0);
    }, 0);

    return total * Users; // Multiply by number of users
  };

  // Calculate user range dynamically
  const userRangeStart = Users;
  const userRangeEnd = Users + 5;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Users Slider */}
        <div className="sticky top-0 z-10  shadow-md p-2 rounded-lg bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between gap-6 ">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                {/* Range Slider Column */}
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-center text-black">Select Users</h2>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="3"
                    value={Users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#172554] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#172554]"
                  />
                  {/* Scale */}
                  <div className="flex justify-between text-sm text-gray-600">
                    {[
                      5, 10, 20, 30, 50, 100, 500
                    ].map((value, index) => (
                      <span key={index} className="text-center" style={{ flex: 1 }}>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Total Column */}
                <div className="flex-2 flex flex-col items-center border-2 border-blue-900 p-2">
                  <p className="text-lg font-medium text-black">
                    Total: {calculateTotal() > 0 ? `$${calculateTotal().toFixed(2)}` : "$0"}
                  </p>
                </div>

                {/* Button Column */}
                <div className="flex-2 flex justify-end">
                  <button
                    onClick={() => {
                      if (calculateTotal() > 0) {
                        // Redirect to /get-started with state
                        window.location.href = "/#/get-started";
                      }
                    }}
                    className={`flex items-center gap-4 px-6 py-3 rounded-lg font-semibold text-lg text-white ${
                      calculateTotal() > 0 ? "bg-[#172554] hover:bg-[#172554]" : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={calculateTotal() === 0} // Disable the button if total is 0
                  >
                    {calculateTotal() > 0 ? "Proceed with selected plan" : "Create your plan"}
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-center mt-8">Choose Modules</h2>

        {/* HR360 Plan Cards */}
        <img src="/products/hr360.svg" width={150} alt="hr360" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-5">
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

        {/* iTeam Plan Cards */}
        <img src="/products/iteam.svg" width={150} alt="iteam" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-5">
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

        {/* LeadKonnekt Plan Cards */}
        <img src="/products/leadkonnekt.svg" width={150} alt="leadkonnekt" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

        {/* EasyForms Plan Cards */}
        <img src="/products/easyforms.svg" width={150} alt="easyforms" className="mx-auto"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-5">
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
        <hr className="my-5 mx-auto" />
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