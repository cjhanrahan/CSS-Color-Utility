'use strict';

define(['validate'], function (validate) {

    describe('The validate object', function () {

        it('should return false for \'FF\'', function () {
            expect(validate.hexInput('FF')).toBe(false);
        });


        it('should return false for \'0f29m3\'', function () {
            expect(validate.hexInput('0f29m3')).toBe(false);
        });


        it('should return true for \'0Fb46C\'', function () {
            expect(validate.hexInput('0Fb46C')).toBe(true);
        });
    });
});