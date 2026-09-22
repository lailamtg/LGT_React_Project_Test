import {DateTimeText} from '../DateTimeText/DateTimeText';
import {useLiveClock} from './useLiveClock';

export const LiveClock = () => {
    const {now} = useLiveClock();
    return <DateTimeText value={now} />;
};
