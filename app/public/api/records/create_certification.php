<?php

require 'common.php';

// Only need this line if we're creating GUIDs (see comments below)


// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// As part of this step, create a new GUID to use as primary key (suitable for cross-system use)
// If we weren't using a GUID, allowing auto_increment to work would be best (don't pass `id` to `INSERT`)

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt2 = $db->prepare(
  'INSERT INTO Certification (certificationAgency, certificationName, defaultExpiration)
  VALUES (?,?,?)'
);

$stmt2->execute([
  $_POST['certificationAgency'],
  $_POST['certificationName'],
  $_POST['defaultExpiration'],

]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('Content-Type: application/json');
echo $json;
