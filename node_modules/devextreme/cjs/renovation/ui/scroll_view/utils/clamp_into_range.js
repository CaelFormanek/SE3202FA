/**
 * DevExtreme (cjs/renovation/ui/scroll_view/utils/clamp_into_range.js)
 * Version: 23.2.5
 * Build date: Mon Mar 11 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.clampIntoRange = clampIntoRange;

function clampIntoRange(value, max, min) {
    return Math.max(Math.min(value, max), min)
}
