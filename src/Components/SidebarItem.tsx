import { useSidebarContext } from "./Sidebar";

const SidebarItem = ({ icon, text, active, alert, onClick }: { icon: any, text: any, active?: any, alert?: any, onClick?: () => void }) => {
    const { expanded } = useSidebarContext();
    return (
        <li className={`relative flex items-center py-3 px-3 ml-1  font-montserrat 
            rounded-md cursor-pointer transition-colors group hover:text-white  text-gray-400
            ${active
                ? "bg-gradient-to-tr from-[#0ea5e9] to-[#818cf8] "
                : " text-gray-300"
            }`}

            onClick={onClick}
        >
            <div className={`rounded-[10px] p-0.5 mr-1 ${active ? "text-white" : "text-blue-600"} hover:text-white`}>{icon}</div>
            {/* {alert && (<div className={`absolute left-1 w-full h-full rounded bg-slate-100 transparent ${alert ? "" : "top-2"}`} />)} */}
            <span className={`overflow-hidden transition-all ${expanded ? "w-[10rem] ml-3" : "w-0"} ${active ? "text-white" : "text-gray-400"} hover:text-white`}>{text}</span>
            {
                !expanded && (
                    <div className={`absolute left-full rounded-md ml-6 py-1 px-1 z-50
                        bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3
                        transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {text}
                    </div>
                )
            }
        </li>
    );
}

export default SidebarItem;


