

const Home = () => {
  return (
    <div>
      <div className="navbar bg-fuchsia-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-sky-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {/* Add dropdown items if needed */}
            </ul>
          </div>
          <a className="btn btn-success normal-case text-xl text-bold text-white rounded-lg border-8">
            Qtec Solution 
          </a>
        </div>

        <div className="navbar-center lg:flex flex-col sm:flex-row">
          <ul className="menu menu-horizontal px-1">
            <li className="text-3xl font-bold bg-fuchsia-200">Todo App</li>
          </ul>
        </div>

        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* Add avatar content if needed */}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
