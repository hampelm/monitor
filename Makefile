package:
	echo "Creating lambda function package"
	zip -r function_package.zip index.js settings.js node_modules
