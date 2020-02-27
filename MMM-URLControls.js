// MMM-URLControls.js

Module.register("MMM-URLControls", {
  // Default module config
  defaults: {
  },

  start: function() {
    var args = new URLSearchParams(window.location.search);

    if (args.has("hideRegions")) {
      args.get("hideRegions").split(",").map(regionName => {
        console.log(`regionName=${regionName}`);
        var elements = document.getElementsByClassName("region " + regionName);
        console.log(elements);
        for (var i = 0; i < elements.length; ++i) {
          var region = elements[i];
          region.style.display = "none";
        }
      });
    }
  },
});
