

The com library will have importing problems to index.js when first installed.
To fix it do the following:

Open: node_modules/@crestron/ch5-crcomlib/package.json

Change: "types": "build_bundles/umd/@types/index.d.ts"
Replace with: "types": "build_bundles/cjs/@types/index.d.ts", "main": "build_bundles/cjs/cr-com-lib.js",