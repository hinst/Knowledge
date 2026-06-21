# Parcel bundler

## Import image

	import icon from 'url:images/icon.webp';

## Fix for tricky import

To fix

	import {unreachable} from 'devlop'

Add to package.json

	"@parcel/resolver-default": {
		"packageExports": true
	}
