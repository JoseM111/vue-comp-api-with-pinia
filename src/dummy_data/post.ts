// post.ts
import { DateTime } from 'luxon';

export interface IPost {
    id: string;
    title: string;
    created: string;
}

// dummy data
export const today: IPost = {
    id: '1',
    title: 'Today',
    created: DateTime.now().toISO(),
};

export const thisWeek: IPost = {
    id: '2',
    title: 'This Week',
    created: DateTime.now().minus({ days: 5 }).toISO(),
};

export const thisMonth: IPost = {
    id: '3',
    title: 'This Month',
    created: DateTime.now().minus({ weeks: 3 }).toISO(),
};