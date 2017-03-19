<?php
header("Content-Type:text/html;charset=utf-8");
session_start();

require './mysql_db/db_fns.php';

$url = 'http://lf.snssdk.com/neihan/service/tabs/';
// 查询出首页电影列表
$movieList = new Utls($url);
echo json_encode($movieList->doCurlGetRequest($_GET, 10000));
