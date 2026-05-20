import TypoGraphy from "../../../UI/TypoGraphy";
import type { ProjectType, SimpleList } from "@/Types/Projects";

/**
 * Props interface for the Project_iconTheme component.
 */
interface ProjectThemeChildren {
  /** @type {string} Header label for the theme asset section */
  title: string;
  /** @type {any[]} Flexible array sequence containing component blueprints or hex string primitives */
  list: any[];
  /** @type {ProjectType} Central state blueprint snapshot of the active project entity data */
  project: ProjectType;
  /** * Lifted parent event handler to securely dispatch dynamic state mutations.
   * @param {any} updatedData - The object representing modified context parameters.
   */
  setProject: (updatedData: any) => void;
}

/**
 * Project_iconTheme Component.
 * Polymorphic presentation container engineered to dynamically render both 
 * the project icon grid nodes and the dynamic color-swatch palette.
 * Intercepts structural metadata types at runtime to toggle execution logic paths.
 * * @component
 */
export default function Project_iconTheme({ title, list, project, setProject }: ProjectThemeChildren) {

  return (
    <div className="w-1/2 pl-1 ml-1 text-brand-secondary text-right">
      <TypoGraphy
        title={title}
        variant={"h6"}
        sx={{
          fontSize: "16px",
          textAlign: "right",
          marginBottom: "10px",
          color: "#000",
        }}
      />

      <ul className="flex flex-row flex-wrap justify-end gap-3">
        {list.map((element: SimpleList, index) => {
          /** @type {boolean} Runtime verification checking if object is a primitive hex text sequence */
          const isColor = typeof element.name === "string";
          /** @type {any} Instantiated reference pointing to functional vector icon component */
          const IconComponent = element.name;

          /** @type {boolean} Evaluation state assessing current structural match properties */
          const isSelected = isColor 
            ? project.icon?.color === element.name 
            : project.icon?.iconID === element.id;

          return (
            <li
              key={element.id || index}
              className={`cursor-pointer transition-all duration-300 ${
                isSelected ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"
              }`}
              onClick={() => {
                if (isColor) {
                  setProject({
                    ...project,
                    icon: { ...project.icon, color: element.name }
                  });
                } else {
                  setProject({
                    ...project,
                    icon: { ...project.icon, iconID: element.id }
                  });
                }
              }}
            >
              {isColor ? (
                <i
                  className={`block w-8 h-6 rounded-md transition-all ${
                    isSelected ? "ring-2 ring-offset-2 ring-gray-400" : ""
                  }`}
                  style={{ background: element.name }}
                ></i>
              ) : (
                <IconComponent 
                  sx={{ 
                    fontSize: "30px", 
                    color: isSelected ? "#304C89" : "inherit" 
                  }} 
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}