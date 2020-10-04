(function() {
  // Material datepicker
  const datepicker = function() {
    // Standard Bar Chart
    jQuery('#datepicker-inline').datetimepicker({
      inline: true
    });
  };
  window.onload = datepicker;
})();