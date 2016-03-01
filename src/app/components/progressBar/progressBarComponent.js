define('ProgressBarComponent', ["jquery", "jqueryui"], function($, jqueryui) {

  var _progressTypeId = '',
    _progressbar_selected = '',
    _progressbar_label = '';

  var _updateProgress = function(evt) {
    var incrementProgressVal = 0,
      val, incrementExpression, innerTextForIncrement, operationType;
    val = $(_progressbar_selected).progressbar("value") || 0;
    innerTextForIncrement = evt.target.innerText;
    incrementProgressVal = parseInt(innerTextForIncrement.substring(1));
    operationType = innerTextForIncrement.charAt(0);
    if (operationType == '+') {
      incrementExpression = val + incrementProgressVal;
    } else if (operationType == '-') {
      incrementExpression = val - incrementProgressVal;
    }
    $(_progressbar_selected).progressbar("value", incrementExpression);

    if (incrementExpression > 100) {
      $(_progressbar_selected + ' .ui-widget-header').css('background', 'rgba(183, 46, 36, 0.95)');
      $(_progressbar_selected + ' .progress-label').text('Task completed');
      $(_progressbar_selected).progressbar("value", incrementExpression);
    }
    if (incrementExpression < 20)
      $(_progressbar_selected + ' .ui-widget-header').css('background', 'rgb(136, 136, 34)');
    if (incrementExpression > 20 && incrementExpression < 100)
      $(_progressbar_selected + ' .ui-widget-header').css('background', 'rgb(90, 179, 51)');
  }

  var _setProgressType = function(options, progressbars) {
    console.log('set Progress Type!');
    _progressTypeId = options.progressTypeId;
    for (var key in progressbars) {
      if (progressbars.hasOwnProperty(key)) {
        if (progressbars[key].typeId == _progressTypeId) {
          _progressbar_selected = progressbars[key].id;
          _progressbar_label = progressbars[key].labelId;
        }
      }
    }
  }

  var _exposeProgressUpdate = function(evt) {
    _updateProgress(evt);
  }

  return {
    update: _exposeProgressUpdate,
    setProgressType: _setProgressType
  };

});
