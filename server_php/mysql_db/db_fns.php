<?php

function db_connect()
{
    try {
        $result = mysqli_connect("localhost:3306", "mysql_db_user", "zm921123");
        mysql_select_db('dtcmsdb4');
    } catch (Exception $e) {
        echo $e->message;
        exit;
    }

    if (!$result) {
        return false;
    }
    return $result;
};

/**
 *@desc 封闭curl的调用接口，get的请求方式。
 */
/**
 *
 */
class Utls {
    public $url;
   
    public function doCurlGetRequest($data, $timeout = 5) {
        if ($this->url == "" || $timeout <= 0) {
            return false;
        }
        $url = $this->url . '?' . http_build_query($data);
        $con = curl_init((string) $url);
        curl_setopt($con, CURLOPT_HEADER, false);
        curl_setopt($con, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($con, CURLOPT_TIMEOUT, (int) $timeout);
        return curl_exec($con);
    }
    public function __construct($url) {
        $this->url     = $url;
    }
};
