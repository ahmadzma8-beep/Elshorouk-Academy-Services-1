function onDropDownChangeIHMI() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    if ( BraCode == 6)
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

                $("#DropDepartmentIhmi").empty();
                $("#DropDepartmentIhmi").append("<option value='0'>اختر القسم</option>");
                var selOpts = "";
                $.each(data, function (k, v) {

                    debugger
                    selOpts += "<option value='" + v.deptCode + "'>" + v.aname; + "</option>";
                });
                $('#DropDepartmentIhmi').append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    }
    
}
function onDropDownDepartmentChangeIHMI() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartmentIhmi').value;
   
 

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
                    $("#DropSubject").empty();
                    $("#DropRegulation").append("<option value='0'>اختر اللائحة</option>");
                    $("#DropSubject").append("<option value='0'>اختر المادة</option>");
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
function onDropDownRegulationChangeIHMI() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    DeptCode = document.getElementById('DropDepartmentIhmi').value;
    Regulation = document.getElementById('DropRegulation').value;


    if (BraCode == 6) {


        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        //cuurrentUrl = window.location.href;

        var url = p + '//' + h + '/User/Attendance/SubjectIhmi';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode, Regulation: Regulation }, //parameters go here in object literal form
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
