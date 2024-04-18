/**
 * DevExtreme (esm/renovation/ui/scheduler/view_model/appointments/utils/getSkippedHoursInRange.js)
 * Version: 23.2.5
 * Build date: Mon Mar 11 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
var HOUR_IN_MS = 36e5;
var HOURS_IN_DAY = 24;
var getSkippedHoursInRange = (startDate, endDate, allDay, viewDataProvider) => {
    var isAllDay = allDay && !viewDataProvider.viewType.includes("timeline");
    var result = 0;
    var currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);
    var endDateWithStartHour = new Date(endDate);
    endDateWithStartHour.setHours(0, 0, 0, 0);
    var {
        endDayHour: endDayHour,
        startDayHour: startDayHour
    } = viewDataProvider.getViewOptions();
    var dayHours = isAllDay ? HOURS_IN_DAY : endDayHour - startDayHour;
    while (currentDate < endDateWithStartHour) {
        if (viewDataProvider.isSkippedDate(currentDate)) {
            result += dayHours
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }
    var startDateHours = startDate.getHours();
    var endDateHours = endDate.getHours() + Math.ceil(endDate.getTime() % HOUR_IN_MS);
    if (viewDataProvider.isSkippedDate(startDate)) {
        if (isAllDay) {
            result += HOURS_IN_DAY
        } else if (startDateHours < startDayHour) {
            result += dayHours
        } else if (startDateHours < endDayHour) {
            result += endDayHour - startDateHours
        }
    }
    if (viewDataProvider.isSkippedDate(endDate)) {
        if (isAllDay) {
            result += HOURS_IN_DAY
        } else if (endDateHours > endDayHour) {
            result += dayHours
        } else if (endDateHours > startDayHour) {
            result += endDateHours - startDayHour
        }
    }
    return result
};
export default getSkippedHoursInRange;
