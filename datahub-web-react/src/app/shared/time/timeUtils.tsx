import { DateInterval } from '../../../types.generated';

export const INTERVAL_TO_SECONDS = {
    [DateInterval.Second]: 1,
    [DateInterval.Minute]: 60,
    [DateInterval.Hour]: 3600,
    [DateInterval.Day]: 86400,
    [DateInterval.Week]: 604800,
    [DateInterval.Month]: 2419200,
    [DateInterval.Year]: 31536000,
};

export type TimeWindowSize = {
    interval: DateInterval;
    count: number;
};

export type TimeWindowSizeMs = number;

export type TimeWindow = {
    startTime: number;
    endTime: number;
};

/**
 * Computes the 'width' or 'size' of a fixed time window in milliseconds given a human-readable
 * date interval (ie. day, month, year) + a count (1, 2...).
 *
 * @param interval a human-readable time interval
 * @param count the number of time intervals composing the window
 */
export const getTimeWindowSizeMs = (windowSize: TimeWindowSize): TimeWindowSizeMs => {
    return INTERVAL_TO_SECONDS[windowSize.interval] * 1000 * windowSize.count;
};

/**
 * Computes a time window start time in milliseconds given the end time in milliseconds,
 * an interval representing the time bucket, and an interval count.
 *
 * @param endTimeMillis the end of the window.
 * @param interval the lookback interval (day, month, year)
 * @param count the number of lookback intervals (3).
 */
export const getTimeWindowStart = (endTimeMillis: number, interval: DateInterval, count: number): number => {
    return endTimeMillis - getTimeWindowSizeMs({ interval, count });
};

/**
 * Returns a TimeWindow corresponding to the current time minus a time window of fixed size.
 *
 * @param windowSize the
 */
export const getFixedLookbackWindow = (windowSize: TimeWindowSize): TimeWindow => {
    const endTime = Date.now();
    return {
        startTime: endTime - getTimeWindowSizeMs(windowSize),
        endTime,
    };
};

export const getRelativeTime = (secondsFromNow: number): string => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    if (secondsFromNow < msPerMinute) {
        return `${Math.round(secondsFromNow / 1000)} seconds ago`;
    }

    if (secondsFromNow < msPerHour) {
        return `${Math.round(secondsFromNow / msPerMinute)} minutes ago`;
    }

    if (secondsFromNow < msPerDay) {
        return `${Math.round(secondsFromNow / msPerHour)} hours ago`;
    }

    if (secondsFromNow < msPerMonth) {
        return `'approximately ${Math.round(secondsFromNow / msPerDay)} days ago'`;
    }

    if (secondsFromNow < msPerYear) {
        return `'approximately ${Math.round(secondsFromNow / msPerMonth)} months ago'`;
    }

    return `'approximately ${Math.round(secondsFromNow / msPerYear)} years ago'`;
};
