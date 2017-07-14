<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrgexamController extends Controller
{
    public function SubjectTest()
    {
        return view('SubjectTest.index');
    }

    public function PaperList()
    {
        return view('SubjectTest.list');
    }

    public function AssemblyInit()
    {
        return view('SubjectTest.init');
    }

    public function FilterTest()
    {
        return view('SubjectTest.filter');
    }

    public function ReViewM()
    {
        return view('SubjectTest.view');
    }

    public function SubItem()
    {
        return view('SubjectTest.item');
    }



    public function LearnTest()
    {
        return view('LearnTest.index');
    }

    public function BeLearnTest()
    {
        return view('LearnTest.list');
    }

    public function SetInfo()
    {
        return view('LearnTest.info');
    }

    public function ConfirmationInfo()
    {
        return view('LearnTest.confirmation');
    }

    public function EnItem()
    {
        return view('LearnTest.enitem');
    }
}
