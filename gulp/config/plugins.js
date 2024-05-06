import replace from "gulp-replace"; // search and replace
import plumber from "gulp-plumber"; // error handling
import notify from "gulp-notify"; // messages (tips)
import browsersync from "browser-sync"; // local server
import newer from "gulp-newer"; // checking updating
import ifPlugin from "gulp-if"; // checking mode

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
}