'use strict';

define(['validate'], function (validate) {

    describe('The validate object', function () {

        it('should return false for \'FF\'', function () {
            expect(validate.hex('FF').isValid).toBe(false);
        });


        it('should return false for \'0f29m3\'', function () {
            expect(validate.hex('0f29m3').isValid).toBe(false);
        });


        it('should return true for \'0Fb46C\'', function () {
            expect(validate.hex('0Fb46C').isValid).toBe(true);
        });
    });
});