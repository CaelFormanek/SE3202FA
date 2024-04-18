/**
 * DevExtreme (renovation/ui/scheduler/view_model/appointments/utils/getSkippedHoursInRange.js)
 * Version: 23.2.5
 * Build date: Mon Mar 11 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.default = void 0;
const HOUR_IN_MS = 36e5;
const HOURS_IN_DAY = 24;
const getSkippedHoursInRange = (startDate, endDate, allDay, viewDataProvider) => {
    const isAllDay = allDay && !viewDataProvider.viewType.includes("timeline");
    let result = 0;
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);
    const endDateWithStartHour = new Date(endDate);
    endDateWithStartHour.setHours(0, 0, 0, 0);
    const {
        endDayHour: endDayHour,
        startDayHour: startDayHour
    } = viewDataProvider.getViewOptions();
    const dayHours = isAllDay ? 24 : endDayHour - startDayHour;
    while (currentDate < endDateWithStartHour) {
        if (viewDataProvider.isSkippedDate(currentDate)) {
            result += dayHours
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }
    const startDateHours = startDate.getHours();
    const endDateHours = endDate.getHours() + Math.ceil(endDate.getTime() % 36e5);
    if (viewDataProvider.isSkippedDate(startDate)) {
        if (isAllDay) {
            result += 24
        } else if (startDateHours < startDayHour) {
            result += dayHours
        } else if (startDateHours < endDayHour) {
            result += endDayHour - startDateHours
        }
    }
    if (viewDataProvider.isSkippedDate(endDate)) {
        if (isAllDay) {
            result += 24
        } else if (endDateHours > endDayHour) {
            result += dayHours
        } else if (endDateHours > startDayHour) {
            result += endDateHours - startDayHour
        }
    }
    return result
};
var _default = getSkippedHoursInRange;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
