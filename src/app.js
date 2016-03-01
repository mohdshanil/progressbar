define(["jquery", "jqueryui", "materialize", "ProgressBarComponent"], function($, jqueryui, materialize, ProgressBarComponent) {
  var initialize = function() {
    var progressbars = {
      "progressbar1": {
        "id": "#progressbar-1",
        "labelId": "#progress-label1",
        "typeId": 1
      },
      "progressbar2": {
        "id": "#progressbar-2",
        "labelId": "#progress-label2",
        "typeId": 2
      },
      "progressbar3": {
        "id": "#progressbar-3",
        "labelId": "#progress-label3",
        "typeId": 3
      }
    };

    $("#progressbar-1").progressbar({
      value: false,
      change: function() {
        $('#progress-label1').text(
          $("#progressbar-1").progressbar("value") + "%");
      },
      complete: function() {
        
      }
    });
    $("#progressbar-2").progressbar({
      value: false,
      change: function() {
        $('#progress-label2').text(
          $("#progressbar-2").progressbar("value") + "%");
      },
      complete: function() {
       
      }
    });
    $("#progressbar-3").progressbar({
      value: false,
      change: function() {
        $('#progress-label3').text(
          $("#progressbar-3").progressbar("value") + "%");
      },
      complete: function() {
        
      }
    });

    $("#progress_type").change(function() {
      var progressTypeId = $("#progress_type").val();
      if (progressTypeId) {
        ProgressBarComponent.setProgressType({
          progressTypeId: progressTypeId
        }, progressbars);
      }
    });

    $("#minus_10").click(function() {
      var progressTypeValue = $("#progress_type").val();
      if (progressTypeValue == null) {
        alert('Select a Progress bar type');
        event.stopPropagation();
      }
      if (progressTypeValue != null) {
        ProgressBarComponent.update(event);
      }
    });

    $("#minus_25").click(function() {
      var progressTypeValue = $("#progress_type").val();
      if (progressTypeValue == null) {
        alert('Select a Progress bar type');
        event.stopPropagation();
      }
      if (progressTypeValue != null) {
        ProgressBarComponent.update(event);
      }
    });

    $("#plus_10").click(function() {
      var progressTypeValue = $("#progress_type").val();
      if (progressTypeValue == null) {
        alert('Select a Progress bar type');
        event.stopPropagation();
      }
      if (progressTypeValue != null) {
        ProgressBarComponent.update(event);
      }
    });

    $("#plus_25").click(function() {
      var progressTypeValue = $("#progress_type").val();
      if (progressTypeValue == null) {
        alert('Select a Progress bar type');
        event.stopPropagation();
      }
      if (progressTypeValue != null) {
        ProgressBarComponent.update(event);
      }
    });
  };
  return {
    initialize: initialize
  };
});
