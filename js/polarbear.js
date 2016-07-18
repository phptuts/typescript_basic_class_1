"use strict";
var PolarBear = (function () {
    function PolarBear() {
        this.legs = 2;
        this.furr = 'white';
        this.isPredator = true;
    }
    PolarBear.prototype.roar = function () {
        console.log("ROAR, I am a polar bear.");
    };
    return PolarBear;
}());
exports.PolarBear = PolarBear;
//# sourceMappingURL=polarbear.js.map