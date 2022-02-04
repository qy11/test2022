"use strict";
exports.__esModule = true;
exports.Company = void 0;
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker_1["default"].name.firstName();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    return Company;
}());
exports.Company = Company;
