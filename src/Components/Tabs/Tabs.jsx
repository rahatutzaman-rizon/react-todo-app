
import "./tabs.css";
const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["All", "Active", "Completed"];
  return (
    <div className="bg-pink-200 w-full flex flex-col sm:flex-row ">
      <ul className="  w-full   flex flex-col sm:flex-row gap-4 ">
        {tabs.map((tab) => (
          <li 
          key={tab.id}
            className={ selectedTab == tab ? `active btn btn-info ` : ``}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
