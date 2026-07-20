# Strip ANSI colors from terminal output saved as text file

	node -e "const fs = require('fs'); const { stripVTControlCharacters } = require('util'); console.log(stripVTControlCharacters(fs.readFileSync('input.txt', 'utf8')))" > output.txt
