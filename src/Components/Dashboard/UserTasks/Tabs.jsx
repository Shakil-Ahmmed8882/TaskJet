

const Tabs = ({handleTabClick,openTab}) => {
      
  // tabs state
  const [openTab, setOpenTab] = useState(0);
  const [activeTab, setActiveTab] = useState("to-do");
  
      const handleTabClick = (tabNumber) => {
            const activeTab =
              tabNumber == 1 ? "to-do" : tabNumber == 2 ? "ongoing" : "completed";
        
            setOpenTab(tabNumber);
            setActiveTab(activeTab);
          };
        


//   const activeClasses = 'border-l border-t border-r rounded-t text-blue-700';
  const activeClasses = `${openTab == 0 && "bg-[black] text-[white]"} ${openTab == 1?"bg-primaryColor text-[white]":(openTab == 2?"bg-[#f5a524] text-[#000]":"bg-[#18c964] text-[white]")} `;
  const inactiveClasses = 'text-blue-500 hover:text-primaryColor';


  return (
    <div className="p-6">
      <ul className="flex border-b w-1/3 justify-around">
        <li
          onClick={() => handleTabClick(0)}
          className={`mr-1 ${openTab === 0 ? '-mb-px' : ''}`}
        >
          <a
            href="#"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 0 ? activeClasses : inactiveClasses
            }`}
          >
            All
          </a>
        </li>
        <li
          onClick={() => handleTabClick(1)}
          className={`mr-1 ${openTab === 1 ? '-mb-px' : ''}`}
        >
          <a
            href="#"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
          >
            To-Do
          </a>
        </li>
        <li
          onClick={() => handleTabClick(2)}
          className={`mr-1 ${openTab === 2 ? '-mb-px' : ''}`}
        >
          <a
            href="#"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
          >
            Ongoing
          </a>
        </li>
        <li
          onClick={() => handleTabClick(3)}
          className={`mr-1 ${openTab === 3 ? '-mb-px' : ''}`}
        >
          <a
            href="#"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
          >
            Completed
          </a>
        </li>
      </ul>
      <div className="w-full text-3xl mt-8">
        <div style={{ display: openTab === 0 ? 'block' : 'none' }}>All</div>
        <div style={{ display: openTab === 1 ? 'block' : 'none' }}>To-Do</div>
        <div style={{ display: openTab === 2 ? 'block' : 'none' }}>Ongoing</div>
        <div style={{ display: openTab === 3 ? 'block' : 'none' }}>Completed</div>
      </div>
    </div>
  );
};

export default Tabs;