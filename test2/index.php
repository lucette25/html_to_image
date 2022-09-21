<?php
echo file_get_contents('../test1/index.html');

$html2pdf = new HTML2PDF('P', 'A4');
$html2pdf-gt;writeHTML($html_content);
$file = $html2pdf-gt;Output('temp.pdf','F');


$im = new imagick('temp.pdf');
$im-gt;setImageFormat( “jpg” );
$img_name = time().'.jpg';
$im-gt;setSize(800,600);
$im-gt;writeImage($img_name);
$im-gt;clear();
$im-gt;destroy();