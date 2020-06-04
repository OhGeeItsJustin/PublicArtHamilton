<?php
//header
header("Content-Type:text");
//open file and r
$fh = fopen('PublicArtLocations.csv.txt', 'r');
//create array
$artArray = array();
//until file is empty 
while (!feof($fh)) {
	//line to read from
    $name = fgets($fh);
	//checks for CSV fields on line
    $extraData = fgetcsv($fh);

    $artArray[] = array('name' => trim($name),
                'description' => trim($extraData[0]),
                'artist' => trim($extraData[1]),
		'location' => trim($extraData[2]),
		'ward' => trim($extraData[3]),
                'date' => trim($extraData[4]),
                'scale' => trim($extraData[5]),
                'category' => trim($extraData[6]),
		'street' => trim($extraData[7]),
		'latitude' => trim($extraData[8]),
		'longitude' => trim($extraData[9]),
		'postal_code' => trim($extraData[10]),
		'city' => trim($extraData[11]),
		'province' => trim($extraData[12]),
		'id1' => trim($extraData[13])
    );
}

echo "<pre>";
print_r($artArray);
echo "</pre>";

$myPropertyMapString = 'var artList = ' . json_encode(utf8ize($artArray)) . ';';
file_put_contents("convPublicArt.js", $myPropertyMapString);



function utf8ize($d) {
    if (is_array($d)) 
        foreach ($d as $k => $v) 
            $d[$k] = utf8ize($v);

     else if(is_object($d))
        foreach ($d as $k => $v) 
            $d->$k = utf8ize($v);

     else 
        return utf8_encode($d);

    return $d;
}