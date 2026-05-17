import type { JSX } from "react";

import IconGenerator from "../utils/IconsGenerator";
import type { SectionsType } from "../Types";
import { colors } from "../../../UI/color";


const SectionsList : SectionsType[] = [
{id : 1 , name : "جميع المهام" , icon : <IconGenerator name="List" sx={{color : colors.text_main , "&:hover" : "color:black"}} />},
{id : 2 , name : "اليوم" , icon : <IconGenerator name="CalendarToday" sx={{color : colors.text_main}} />},
{id : 3 , name : "القادمة" , icon : <IconGenerator name="CalendarMonth" sx={{color : colors.text_main}} />},
{id : 4 , name : "المكتملة" , icon : <IconGenerator name="TaskAlt" sx={{color : colors.text_main}}/>},
];


function Sections() : JSX.Element {
    return(
        <div className="w-full flex flex-col gap-3 mt-3">
        {SectionsList.map((Section : SectionsType) => {
            return(
                <div key={Section.id} className="group w-full flex flex-row-reverse px-3 py-2 cursor-pointer transition-all duration-200 hover:bg-brand-primary hover:text- rounded-md ">
                    <i >{Section.icon}</i>
                    <h3 className={"mr-2"} style={{color : colors.text_main}} >{Section.name}</h3>               
                </div>
            )
        })}

        </div>
    )

}

export default Sections;