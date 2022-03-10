
The com library will have importing problems to index.js when first installed.

To fix it do the following:

	1.	Open: node_modules/@crestron/ch5-crcomlib/package.json
	2.	Change: "types": "build_bundles/umd/@types/index.d.ts"
	3.	Replace with: "types": "build_bundles/cjs/@types/index.d.ts", "main": "build_bundles/cjs/cr-com-lib.js",
	
