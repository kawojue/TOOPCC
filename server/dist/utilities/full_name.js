"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function full_name(fullname) {
    let actualName = "";
    const names = (fullname === null || fullname === void 0 ? void 0 : fullname.split(" ")) || [];
    names.forEach((name) => {
        actualName += name[0].toUpperCase() + name.slice(1).toLowerCase() + " ";
    });
    return actualName.trim();
}
exports.default = full_name;
