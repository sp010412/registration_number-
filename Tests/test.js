describe('Registration Exersice', function () {
    it('it should get regstrations set', function () {
        let tests = registrationNumbers()
        tests.storePlates("CA 12345")
        tests.storePlates("CA 12346")
        tests.storePlates("CA 12347")

        assert.deepEqual(tests.getStorePlates(), ["CA 12345", "CA 12346", "CA 12347"]);
    });

    it('it should prevent duplication of regstrations from being added', function () {
        let tests = registrationNumbers()
        tests.storePlates("CA 75897")
        tests.storePlates("CA 78887")
        tests.storePlates("PA 75869")
        tests.storePlates("WC 78526")
        tests.storePlates("WC 78526")

        assert.deepEqual(tests.getStorePlates(), ['CA 75897', 'CA 78887', 'PA 75869', 'WC 78526']);
    });

    it('it should take in lower case letters and display in upperCase letters', function () {
        let tests = registrationNumbers()
        tests.storePlates("ca 75897")
        tests.storePlates("ca 78887")
        tests.storePlates("pa 75869")
        tests.storePlates("wc 78526")

        assert.deepEqual(tests.getStorePlates(), ['CA 75897', 'CA 78887', 'PA 75869', 'WC 78526']);
    });

});