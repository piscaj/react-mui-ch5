
Example project for kick starting a React project using Crestron's cr-com-lib.
This project uses MUI library and is built without using Crestron's CH5 components.

Basic SIMPL program included. 

This project uses FontAwesome Pro, so a few modifacations may be needed if you don't have a licence.  No licence, change dependencies to Free version and adjust icon imports in project where needed.

Note: The com library will have importing problems to index.js when first installed.

To fix this do the following:

	1.	Open: node_modules/@crestron/ch5-crcomlib/package.json
	2.	Change: "types": "build_bundles/umd/@types/index.d.ts"
		Replace with: "types": "build_bundles/cjs/@types/index.d.ts", "main": "build_bundles/cjs/cr-com-lib.js",
	
