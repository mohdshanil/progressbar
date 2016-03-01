define(["jquery", "app", "ProgressBarComponent"], function($, app, ProgressBarComponent) {

  describe('Test for Progress loading component', function() {

    jasmine.getFixtures().fixturesPath = 'base/test';
    beforeEach(function() {
      loadFixtures('progressBarFixture.html');
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      app.initialize();
    });
    afterEach(function() {
      jasmine.clock().uninstall();
    });
    it('hello', function() {
      expect($('.cp_header_wrap')).toBeDefined;
    });

    it("value of progressbar-1", function() {
      $("#progressbar-1").progressbar({
        value: 50,
        change: function() {
          $('#progress-label1').text(
            $("#progressbar-1").progressbar("value") + "%");
        },
        complete: function() {
          // $('#progress-label1').text("100%");
        }
      });

      expect($("#progressbar-1").progressbar("value")).toBe(50);
      expect($("#progressbar-1").text().trim()).toBe("50%");
    });
    it('should trigger click event on #minus_10 element', function() {
      var spyEvent = spyOnEvent('#minus_10', 'click')
      $('#minus_10').click();
      expect('click').toHaveBeenTriggeredOn('#minus_10')
      expect(spyEvent).toHaveBeenTriggered();
      expect($('.cp_header_wrap')).toBeDefined;
    });

    it('should trigger click event on #plus_10 element', function() {
      var spyEvent = spyOnEvent('#plus_10', 'click')
      $('#plus_10').click();
      expect('click').toHaveBeenTriggeredOn('#plus_10')
      expect(spyEvent).toHaveBeenTriggered();
    });

    it('should trigger click event on #plus_25 element', function() {
      var spyEvent = spyOnEvent('#plus_25', 'click')
      $('#plus_25').click();
      expect('click').toHaveBeenTriggeredOn('#plus_25')
      expect(spyEvent).toHaveBeenTriggered();
    });
    it('should trigger click event on #minus_25 element', function() {
      var spyEvent = spyOnEvent('#minus_25', 'click');
      $('#minus_25').click();
      expect('click').toHaveBeenTriggeredOn('#minus_25')
      expect(spyEvent).toHaveBeenTriggered();
    });

    it('should select a progress bar option from selectbox', function() {
      var spyEvent = spyOnEvent('#progress_type', 'change')
      $('#progress_type').change();
      expect($("#progress_type").val()).toBeDefined();
    });

    it('progress type values should get updated on changing the select dropdowns', function() {
      $("#progress_type").val('2');
      $("#progressbar-2").progressbar("value", 50);
      expect($('#progress-label2').text().trim()).toBe('50%');
      expect($("#progressbar-2").progressbar("value")).toBe(50);
    });

  });

});
