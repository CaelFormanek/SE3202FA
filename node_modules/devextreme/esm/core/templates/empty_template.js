/**
 * DevExtreme (esm/core/templates/empty_template.js)
 * Version: 23.2.5
 * Build date: Mon Mar 11 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import $ from "../renderer";
import {
    TemplateBase
} from "./template_base";
export class EmptyTemplate extends TemplateBase {
    _renderCore() {
        return $()
    }
}
