function onDropDownChange() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    


        p = window.location.protocol;
        h = window.location.host;
        th = window.location.pathname;
        
        url = p + '//' + h + '/User/Request/Regulation';

        $.ajax({
            url: url,
            data: { EduYearCode: myVar, BraCode: BraCode }, //parameters go here in object literal form
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
                $("#DropRegulation").append(selOpts);
            },
            error: function () {
                alert('something bad happened');
            }
        });
    
    
}
function onDropDownRegulationHicitChange() {
    debugger
    myVar = document.getElementById('Drop1').value;
    BraCode = document.getElementById('BraCode').value;
    Regulation = document.getElementById('DropRegulation').value;



    p = window.location.protocol;
    h = window.location.host;
    th = window.location.pathname;
    //cuurrentUrl = window.location.href;
    debugger
    if (BraCode == 3 || BraCode == 8 || BraCode == 9) {
        var url = p + '//' + h + '/User/Attendance/SubjectCS';
    }
    if (BraCode == 4) {
        var url = p + '//' + h + '/User/Attendance/SubjectMIS';
    }
    if (BraCode == 5) {
        var url = p + '//' + h + '/User/Attendance/SubjectMA';
    }


    $.ajax({
        url: url,
        data: { EduYearCode: myVar, BraCode: BraCode, Regulation: Regulation }, //parameters go here in object literal form
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
function OnTypeChange() {
    Type = document.getElementById('Type').value;
    BraCode = document.getElementById('BraCode').value;



    var mohadralist = ["أختر المحاضرة",

                               "المحاضرة الأولي",
                               "المحاضرة الثانية",
                              "المحاضرة الثالثة",
                                "المحاضرة الرابعة",
                                "المحاضرة الخامسة",
                               "المحاضرة السادسة",
                                "المحاضرة السابعة",
                              "المحاضرة الثامنة",
                              "المحاضرة التاسعة",
                               "المحاضرة العاشر",
                              "المحاضرة الحادية عشر",
                               "المحاضرة الثاني عشر",
                                "المحاضرة الثالث عشر",
                                "المحاضرة الرابع عشر",
                               "المحاضرة الخامس عشر",
                                "المحاضرة السادس عشر",
                             "المحاضرة السابع عشر",
                               "المحاضرة الثامن عشر",
                                "المحاضرة التاسع عشر",
                              "المحاضرة العشرون",
                                "المحاضرة الحادية والعشرون ",
                               "المحاضرة الثانية والعشرون",
                               "المحاضرة الثالثة والعشرون",
                               "المحاضرة الرابعة والعشرون",
                                "المحاضرة الخامسة والعشرون",
                               "المحاضرة السادسة والعشرون",
                              "المحاضرة السابعة  والعشرون",
                              "المحاضرة الثامنة والعشرون",
                              "المحاضرة التاسعة والعشرون",
                             "المحاضرة الثلاثون",
                                "المحاضرة الحادية والثلاثون",
                               "المحاضرةالثانية والثلاثون",
                               "المحاضرة الثالثة والثلاثون",
                               "المحاضرة الرابعة والثلاثون",
        "المحاضرة الخامسة والثلاثون"];

    var seclist = [
        "أختر الاسبوع",
        "الاسبوع الأول",
        "الاسبوع الثاني",
        "الاسبوع الثالث",
        "الاسبوع الرابع",
        "الاسبوع الخامس",
        "الاسبوع السادس",
        "الاسبوع السابع",
        "الاسبوع الثامن",
        "الاسبوع التاسع",
        "الاسبوع العاشر",
        "الاسبوع الحادي عشر",
        "الاسبوع الثاني عشر",
        "الاسبوع الثالث عشر",
        "الاسبوع الرابع عشر",
        "الاسبوع الخامس عشر",
        "الاسبوع السادس عشر",
        "الاسبوع السابع عشر",
        "الاسبوع الثامن عشر",
        "الاسبوع التاسع عشر",
        "الاسبوع العشرون",];


    if (BraCode == 3 || BraCode == 4 || BraCode == 5 || BraCode == 8 || BraCode == 9) {
        var $dropdown = $("#Week");
        
        if (Type == "M") {
            $('#Week')
                .find('option')
                .remove()
                .end();
                ;
            for (var i = 0; i < mohadralist.length; i++) {
                if (i == 0)
                    $dropdown.append($("<option />").val(null).text(mohadralist[i]));
                else $dropdown.append($("<option />").val(i).text(mohadralist[i]));

            }

        }
        if (Type == "S") {
            $('#Week')
                .find('option')
                .remove()
                .end();
               
                ;
            for (var i = 0; i < seclist.length; i++) {
                    if (i == 0)
                        $dropdown.append($("<option />").val(null).text(seclist[i]));
                    else $dropdown.append($("<option />").val(i).text(seclist[i]));

            }

       }
        if (Type != "S" && Type != "M") {
            
            $('#Week')
                .find('option')
                .remove()
                .end()
                .append('<option>المحاضرة / الاسبوع</option>')
                .val('');
             
            $("#Week").val($("#Week option:first").val());
        }
    }
   
  
}
//function onDropDownDepartmentChange() {
//    debugger
//    myVar = document.getElementById('Drop1').value;
//    BraCode = document.getElementById('BraCode').value;
//    DeptCode = document.getElementById('DropDepartment').value;
//    if (DeptCode == 7) {
//        var x = document.getElementById("DropDownDetailDiv");
//        if (x.style.display === "none") {
//            x.style.display = "block";
//        } else {
//            x.style.display = "none";
//        }
//    }
//    else {
//        var x = document.getElementById("DropDownDetailDiv");
//        if (x.style.display === "none") {
           
//        } else {
//            x.style.display = "none";
//        }
//    }
    
//    if (BraCode == 1 && DeptCode == 7) {


//        p = window.location.protocol;
//        h = window.location.host;
//        th = window.location.pathname;
//        //cuurrentUrl = window.location.href;
//        debugger

//        var url = p + '//' + h + '/User/Attendance/DepartmentDetail';

//        $.ajax({
//            url: url,
//            data: { EduYearCode: myVar, BraCode: BraCode, DeptCode: DeptCode}, //parameters go here in object literal form
//            type: 'GET',
//            datatype: 'json',
//            success: function (data) {
//                //alert('got here with data');

//                $("#DropDepartmentDetail").empty();
//                var selOpts = "";
//                $.each(data, function (k, v) {

//                    debugger
//                    selOpts += "<option value='" + v.deptCode + "'>" + v.aname; + "</option>";
//                });
//                $('#DropDepartmentDetail').append(selOpts);
//            },
//            error: function () {
//                alert('something bad happened');
//            }
//        });
//    }
    
//}

