<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use GuzzleHttp\Client;

Route::get('/', function () {
    $client = new Client([
        'base_uri' => 'https://oms.mofangge.com',
        'timeout'  => 2.0,
    ]);

    $response = $client->request('POST', '/Ability/index/GetAbilityPaper', ['form_params' => ['userInfo' => '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}']]);


    $result = json_decode($response->getBody(), true);

    dd($result);
//    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/OrgExam/Index/SubjectTest', 'OrgexamController@SubjectTest');
Route::get('/OrgExam/CreateExam/PaperList', 'OrgexamController@PaperList');
Route::get('/OrgExam/CreateExam/AssemblyInit', 'OrgexamController@AssemblyInit');
Route::get('/OrgExam/CreateExam/FilterTest', 'OrgexamController@FilterTest');
Route::get('/OrgExam/CreateExam/ReViewM', 'OrgexamController@ReViewM');
Route::get('/OrgExam/Index/SubItem', 'OrgexamController@SubItem');




Route::get('/OrgExam/Index/LearnTest', 'OrgexamController@LearnTest');
Route::get('/OrgExam/Index/BeLearnTest', 'OrgexamController@BeLearnTest');
Route::get('/OrgExam/Index/SetInfo', 'OrgexamController@SetInfo');
Route::get('/OrgExam/Index/ConfirmationInfo', 'OrgexamController@ConfirmationInfo');
Route::get('/OrgExam/Index/EnItem', 'OrgexamController@EnItem');


Route::get('/OrgZiXun/ZiXunGuanLi/IndexCounselor', 'OrgzixunController@FilterTest');
Route::get('/OrgZiXun/ZiXunGuanLi/ContactIndexCounselor', 'OrgzixunController@ContactIndexCounselor');
Route::get('/OrgExam/Index/SubReport', 'OrgzixunController@SubReport');
Route::get('/OrgExam/Index/PrintPreSee', 'OrgzixunController@PrintPreSee');
Route::get('/OrgExam/Index/Report', 'OrgzixunController@Report');

