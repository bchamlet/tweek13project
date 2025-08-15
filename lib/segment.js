// /lib/segment.js
import { useEffect } from "react";

const SEGMENT_WRITE_KEY = "EbXyYel9PBmXY3IQfhu7gEgGYMHwJDmv";

export function useSegment(pageName) {
  useEffect(() => {
    // Load analytics.js if not already present
    if (!window.analytics) {
      !(function () {
        var analytics = (window.analytics = window.analytics || []);
        if (!analytics.initialize)
          if (analytics.invoked)
            window.console &&
              console.error &&
              console.error("Segment snippet included twice.");
          else {
            analytics.invoked = true;
            analytics.methods = [
              "trackSubmit",
              "trackClick",
              "trackLink",
              "trackForm",
              "pageview",
              "identify",
              "reset",
              "group",
              "track",
              "ready",
              "alias",
              "debug",
              "page",
              "once",
              "off",
              "on",
            ];
            analytics.factory = function (t) {
              return function () {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(t);
                analytics.push(e);
                return analytics;
              };
            };
            for (var t = 0; t < analytics.methods.length; t++) {
              var e = analytics.methods[t];
              analytics[e] = analytics.factory(e);
            }
            analytics.load = function (key) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = true;
              script.src =
                "https://cdn.segment.com/analytics.js/v1/" +
                key +
                "/analytics.min.js";
              var firstScript = document.getElementsByTagName("script")[0];
              firstScript.parentNode.insertBefore(script, firstScript);
            };
            analytics.SNIPPET_VERSION = "4.1.0";
            analytics.load(SEGMENT_WRITE_KEY);
          }
      })();
    }
    if (window.analytics && typeof window.analytics.page === "function") {
      window.analytics.page(pageName);
    }
  }, [pageName]);
}
