function onDropDownChangeHIE() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    if (BraCode == 1 || BraCode == 6)
    {
        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        //cuurrentUrl = window.location.href;
        debugger
        var url = p + '//' + h + '/User/Attendance/Department';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode }, //parameters go here in object literal form
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                //alert('got here with data');

                $("#DropDepartment").empty();
                $("#DropRegulation").empty();
                $("#DropSubject").empty();
                $("#DropDepartment").append("<option value='0'>اختر القسم</option>");
                $("#DropRegulation").append("<option value='0'>اختر اللائحة</option>");
                $("#DropSubject").append("<option value='0'>اختر المادة</option>");
                var selOpts = "";
                $.each(data, function (k, v) {

                    debugger
                    selOpts += "<option value='" + v.deptCode + "'>" + v.aname; + "</option>";
                });
                $('#DropDepartment').append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    }
    
}
function onDropDownDepartmentChange() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartment').value;
    if (DeptCode == 7 && myVar >= 4) {
        var x = document.getElementById("DropDownDetailDiv");
        if (x.style.display === "none") {
            x.style.display = "block";
            $("#DropDepartmentDetail").attr("required",true)
        } else {
            x.style.display = "none";

            $("#DropDepartmentDetail").removeAttr("required")
        }
    }
    else {
        var x = document.getElementById("DropDownDetailDiv");
        if (x.style.display === "none") {
            $("#DropDepartmentDetail").removeAttr("required")

        } else {
            x.style.display = "none";
            $("#DropDepartmentDetail").removeAttr("required")

        }
    }
    if (BraCode == 1 && DeptCode != 7) {
        debugger
        myVar = document.getElementById('Drop1').value;
        BraCode = document.getElementById('BraCode').value;
        DeptCode = document.getElementById('DropDepartment').value;
        



      
            p = window.location.protocol;
            h = window.location.host;
            th = window.location.pathname;
            //cuurrentUrl = window.location.href;

            var url = p + '//' + h + '/User/Request/Regulation';

            $.ajax({
                url: url,
                data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode}, //parameters go here in object literal form
                type: 'GET',
                datatype: 'json',
                success: function (data) {
                    //alert('got here with data');

                    $("#DropRegulation").empty();
                    $("#DropRegulation").append("<option value='0'>اختر اللائحة</option>");
                    var selOpts = "";
                    $.each(data, function (k, v) {

                        debugger
                        selOpts += "<option value='" + v.regulation + "'>" + v.aname; + "</option>";
                    });
                    $('#DropRegulation').append(selOpts);
                },
                error: function () {
                    alert('something bad happened');
                }
            });
        
    }
    if (BraCode == 1 && DeptCode == 7) {

        if (myVar >= 4)
        {
            p = window.location.protocol;
            h = window.location.host;
            th = window.location.pathname;
            //cuurrentUrl = window.location.href;
            debugger

            var url = p + '//' + h + '/User/Attendance/DepartmentDetail';

            $.ajax({
                url: url,
                data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode }, //parameters go here in object literal form
                type: 'GET',
                datatype: 'json',
                success: function (data) {
                    //alert('got here with data');

                    $("#DropDepartmentDetail").empty();
                    $("#DropDepartmentDetail").append("<option value='0'>اختر الشعبة</option>");
                    var selOpts = "";
                    $.each(data, function (k, v) {

                        debugger
                        selOpts += "<option value='" + v.deptCode + "'>" + v.aname; + "</option>";
                    });
                    $('#DropDepartmentDetail').append(selOpts);
                },
                error: function () {
                    alert('something bad happened');
                }
            });
        }
        else
        {
            p = window.location.protocol;
            h = window.location.host;
            th = window.location.pathname;
            //cuurrentUrl = window.location.href;

            var url = p + '//' + h + '/User/Request/Regulation';

            $.ajax({
                url: url,
                data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode }, //parameters go here in object literal form
                type: 'GET',
                datatype: 'json',
                success: function (data) {
                    //alert('got here with data');

                    $("#DropRegulation").empty();
                    $("#DropRegulation").append("<option value='0'>اختر اللائحة</option>");
                    var selOpts = "";
                    $.each(data, function (k, v) {

                        debugger
                        selOpts += "<option value='" + v.regulation + "'>" + v.aname; + "</option>";
                    });
                    $('#DropRegulation').append(selOpts);
                },
                error: function () {
                    alert('something bad happened');
                }
            });
        }

    }
    

    
    
}

function onDropDownDepartmentAndDetailChange() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartment').value;
    DeptDetail = document.getElementById('DropDepartmentDetail').value;
    
    


        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        //cuurrentUrl = window.location.href;
        
        var url = p + '//' + h + '/User/Request/Regulation';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode, DeptDetail: DeptDetail }, //parameters go here in object literal form
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                //alert('got here with data');
                debugger
                $("#DropRegulation").empty();
                $("#DropRegulation").append("<option value='0'>اختر اللائحة</option>");
                var selOpts = "";
                $.each(data, function (k, v) {

                    debugger
                    selOpts += "<option value='" + v.regulation + "'>" + v.aname; + "</option>";
                });
                $('#DropRegulation').append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    

}

function onDropDownRegulationChange() {

    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartment').value;
    DeptDetail = document.getElementById('DropDepartmentDetail').value;
    Regulation = document.getElementById('DropRegulation').value;


    if (BraCode == 1) {


        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        //cuurrentUrl = window.location.href;

        var url = p + '//' + h + '/User/Attendance/SubjectHie';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode, DeptDetail: DeptDetail, Regulation, Regulation }, //parameters go here in object literal form
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                //alert('got here with data');

                $("#DropSubject").empty();
                $("#DropSubject").append("<option value='0'>اختر المادة</option>");
                var selOpts = "";
                $.each(data, function (k, v) {

                    debugger
                    selOpts += "<option value='" + v.subId + "'>" + v.aname; + "</option>";
                });
                $('#DropSubject').append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    }






}


function SubjectChange() {
 
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartment').value;
    DeptDetail = document.getElementById('DropDepartmentDetail').value;
    Regulation = document.getElementById('DropRegulation').value;
    SubId = document.getElementById('DropSubject').value;

    if (BraCode == 1) {
       
       

        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        //cuurrentUrl = window.location.href;

        var url = p + '//' + h + '/User/Attendance/SubjectDetailHie';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode, DeptDetail: DeptDetail, Regulation: Regulation, SubId: SubId }, //parameters go here in object literal form
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                //alert('got here with data');
                if (data.length == 0) {
                    document.getElementById('btn_submit').setAttribute("type", "submit");
                   debugger
                    var x = document.getElementById("DropSubjectDetailDiv");
                    if (x.style.display === "none") {
                        $("#DropSubjectDetail").removeAttr("required")

                        //x.style.display = "block";
                    } else {
                        $("#DropSubjectDetail").removeAttr("required")

                        x.style.display = "none";
                    }
                }
                else {
                   debugger
                    var x = document.getElementById("DropSubjectDetailDiv");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                        $("#DropSubjectDetail").attr("required", true)
                    } else {
                        $("#DropSubjectDetail").removeAttr("required")

                        //x.style.display = "none";
                    }
                }
                $("#DropSubjectDetail").empty();
                $("#DropSubjectDetail").append("<option value='0'>اختر المادة الاختيارية</option>");
                var selOpts = "";
                $.each(data, function (k, v) {

                    debugger
                    selOpts += "<option value='" + v.subId + "'>" + v.aname; + "</option>";
                });
                $('#DropSubjectDetail').append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    }




}