import {useState} from 'react';
import type {ContentId} from './HomePageModels';

export const useHomePage = () => {
    const [activeContent, setActiveContent] = useState<ContentId>('content1');
    const [lastUpdatedTime, setLastUpdatedTime] = useState<Date | null>(null);
    const updateTime = () => setLastUpdatedTime(new Date());
    return {activeContent, setActiveContent, lastUpdatedTime, updateTime};
};
