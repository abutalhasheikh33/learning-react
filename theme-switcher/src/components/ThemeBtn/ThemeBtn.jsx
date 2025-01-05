
import { useTheme } from "../../context/ThemeContext/context"


export default function ThemeBtn() {
   const {themeMode,darkMode,lightMode} = useTheme();
   
    const change = (e)=>{
        const darkStatus = e.target.checked;
        if(darkStatus){
            darkMode()
        }
        else{
            lightMode()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                onChange={change}
                type="checkbox"
                value={themeMode}
                className="sr-only peer"
                checked = { themeMode === 'dark' }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className={`ml-3 text-sm font-medium ${themeMode=='dark'?'text-white':'text-gray-900'} `}>Toggle Theme</span>
        </label>
    );
}

