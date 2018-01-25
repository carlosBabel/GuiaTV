<!DOCTYPE html>
<html>
	<head>
		<title>Enlaces de interés</title>
	</head>
	<body>
		<?php
			$myfile = fopen("https://www.dropbox.com/s/abwenqps1bf8s7b/enlaces%20de%20interes.txt", "r") or die("Unable to open file!");
			// Output one line until end-of-file
			while(!feof($myfile)) {
			  echo fgets($myfile) . "<br>";
			}
			fclose($myfile);
		?>
	</body>
</html>