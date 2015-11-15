var fs = require('fs');
var parse = require('csv-parse');
var camelize = require('camelize');

// These are extracted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/react/react.d.ts#L427.
var existingProperties = {
	boxFlex: true,
	boxFlexGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexShrink: true,
	fontWeight: true,
	lineClamp: true,
	lineHeight: true,
	opacity: true,
	order: true,
	orphans: true,
	widows: true,
	zIndex: true,
	zoom: true,
	fontSize: true,
	fillOpacity: true,
	strokeOpacity: true,
	strokeWidth: true
}

var d = fs.readFileSync('reference.csv');
parse(d, function(err, data) {
	var seenHeader = false;
	for (var row of data) {
		if (seenHeader) {
			var propertyName = row[0];
			var summary = row[1];

			if (summary != "") {
				var lines = summary.split("\n");
				var comment = "/**\n";
				for (var l of lines) {
					comment += " * " + l + "\n";
				}
				comment += " */";
			}

			var p = camelize(propertyName);
			
			if (existingProperties[p]) {
				continue;
			}
			
			console.log("")
			if (summary != "") {
				console.log(comment);
			}
			console.log(`${p}?: any;`);
		}
		seenHeader = true;
	}
});