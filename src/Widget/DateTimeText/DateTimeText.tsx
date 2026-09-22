import './DateTimeText.css';
import type {DateTimeTextProps} from './DateTimeTextModels';

export const DateTimeText = ({value, placeholder = 'Not updated yet'}: DateTimeTextProps) => (
    value ? <time dateTime={value.toISOString()} className="date-time">{new Intl.DateTimeFormat('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
    }).format(value)}</time> : <span>{placeholder}</span>
);
