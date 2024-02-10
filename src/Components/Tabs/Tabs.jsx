import { useState } from "react";


const Tabs = () => {
    const [selected,setSelected]=useState("all");
    const tabs=["all","complete","incomplete"];

    return (
        <div>
           <div  className=" flex">
           <h2>tab</h2>
           <ul className=" flex gap-4">
           {
            tabs.map((tab)=>(
               <li key={tab.id} className={selected == tab ? `tab tab-active bg-red-300` : ``}
               onClick={()=>setSelected(tab)}>{tab}</li>
            ))
           }
            

           </ul>
          
 


</div>
        </div>
    );
};

export default Tabs;