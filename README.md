reference.csv comes from http://docs.webplatform.org/w/index.php?title=Special:Ask&offset=0&limit=500&q=%5B%5BCategory%3ACSS+Properties%5D%5D&p=format%3Dtemplate%2Flink%3Dnone%2Fsearchlabel%3DSee-20more-20pages...%2Ftemplate%3DSummary_Table_Body%2Fintrotemplate%3DSummary_Table_Header%2Foutrotemplate%3DSummary_Table_Footer&po=%3FPage+Title%0A%3FSummary%0A#, and is used under license (http://docs.webplatform.org/wiki/Template:CC-by-3.0).

Minor edits to reference.csv were made to fix errors and remove a vendor-specific property (see commit history).

To generate property-types.txt:

		npm install
		node process.js > property-types.txt