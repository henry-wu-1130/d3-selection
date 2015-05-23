var tape = require("tape"),
    jsdom = require("jsdom"),
    selection = require("../../lib/d3/selection");

tape("selection.select can select an element", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = selection.select(document.documentElement);
  test.ok(s instanceof selection);
  test.equal(s._depth, 1, "_depth is one");
  test.ok(Array.isArray(s._root), "_root is an array");
  test.equal(s._root.length, 1, "_root has length one");
  test.equal(s._root[0], document.documentElement, "_root[0] is the selected element");
  test.equal(s._root._parent, null, "_root._parent is null");
  test.equal(s._enter, null, "_enter is null");
  test.equal(s._exit, null, "_exit is null");
  test.end();
});

// tape("can subselect a child element", function(test) {
//   var document = jsdom.jsdom("<h1>hello</h1>"),
//       s = selection.select(document.documentElement).select("h1");
//   test.ok(s instanceof selection, "returns an instanceof selection");
//   test.equal(s.size(), 1, "the selection contains a single element");
//   test.equal(s.node(), document.querySelector("h1"), "that element is the expected element");
//   test.end();
// });