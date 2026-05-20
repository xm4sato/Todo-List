import { 
  FormatListBulleted, 
  CalendarToday, 
  CalendarMonth, 
  TaskAlt, 
  Icecream, 
  PlusOne
} from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

/**
 * Valid strict string keys mapped to explicit material vector graphics inside the internal registry.
 */
type IconName = 'List' | 'CalendarToday' | 'CalendarMonth' | 'TaskAlt';

/**
 * Interface definition for the {@link IconGenerator} component props.
 * Extends default Material UI SvgIcon configurations to support contextual vector formatting properties.
 */
interface DynamicIconProps extends SvgIconProps {
  /** @type {IconName | string} The evaluation string key lookup targeting a specific registered asset */
  name: IconName | string; 
}

/**
 * IconGenerator Component.
 * A runtime isomorphic vector generator designed to conditionally parse serialized string tags 
 * and translate them safely into interactive UI layout nodes.
 * Contains structural fallbacks to avoid layout crashing when handling corrupted or unmapped parameters.
 * * @component
 */
const IconGenerator = ({ name, ...props }: DynamicIconProps) => {
  
  /** * Dictionary mapping table linking literal string tags to static constructor module blueprints.
   * @type {Record<string, React.ElementType>}
   */
  const iconMap: Record<string, React.ElementType> = {
    List: FormatListBulleted,
    CalendarToday: CalendarToday,
    CalendarMonth: CalendarMonth,
    TaskAlt: TaskAlt,
    PlusOne: PlusOne
  };

  /** * Runtime Evaluation Node.
   * Extracts matching component configurations based on parameter tags, 
   * defaulting to a safe fallback item ('Icecream') if key hits yield undefined.
   * @type {React.ElementType}
   */
  const IconComponent = iconMap[name] || Icecream;

  return <IconComponent {...props} />;
};

export default IconGenerator;