define(function () {

    describe('The app', function () {
        var redInput;

        beforeEach(function (done) {
            redInput = document.querySelector('[data-value-type=red] input[type=range]');
            redInput.value = '33';
            redInput.value = '2';
            setTimeout(function () { done(); }, 200);
        });


        it('should allow the user to alter color values', function (done) {
            expect(redInput.value).toEqual('2');
            done();
            expect(true).toBe(false); // can't recreate error
        });
    });
});