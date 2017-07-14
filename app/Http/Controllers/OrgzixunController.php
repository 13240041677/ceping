<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrgzixunController extends Controller
{
    public function FilterTest()
    {
        return view('ZiXunGuanLi.FilterTest');
    }

    public function ContactIndexCounselor()
    {
        return view('ZiXunGuanLi.ContactIndexCounselor');
    }

    public function SubReport()
    {
        return view('ZiXunGuanLi.SubReport');
    }

    public function PrintPreSee()
    {
        return view('ZiXunGuanLi.PrintPreSee');
    }
}
