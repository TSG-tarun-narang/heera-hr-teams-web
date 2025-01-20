$(document).ready(function () {
    $('#dvLoading').show();
    $('#dvCheckVPN').hide();
    $('#dvSearchArea').hide();
    FetchMSTeamsToken();

    //CheckVPNandRedirect();

    // use setTimeout() to execute
    // setInterval(function () {
    //     if ($('#dvCheckVPN').is(":visible") && $('#dvLoading').is(":hidden")) {
    //        CheckVPNandRedirect();
    //     }
    // }, 3000);

    $('#txtSearchBox').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            RedirectToCompass();
        }
    });
});

function FetchMSTeamsToken() {
    try {
        console.log('##################');
        microsoftTeams.initialize();
        console.log('######Initiliazation Done');
        var authTokenRequest = {            
            successCallback: function (result) {
                //call server side to exchange the  token from teams with access token & used it to call graph
                console.log('token = ' + result);
            },            
            failureCallback: function (error) { console.log("Failure: " + error); },
        };
        microsoftTeams.authentication.getAuthToken(authTokenRequest);
    } catch (ex) {
        console.log(e);
    }
}

function CheckVPNandRedirect() {
    $.ajax({
        url: 'https://compass.bain.com/compassapi/pulsecheck',
        cache: false,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            console.log("success");
            $('#dvLoading').hide();
            $('#dvSearchArea').show();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("error");
            $('#dvLoading').hide();
            $('#dvCheckVPN').show();
        }
    });
}

function RedirectToCompass() {
    var searchTerm = $("#txtSearchBox").val();
    $("#txtSearchBox").val('');
    if ($.trim(searchTerm).length > 0) {
        var searchUrl = "https://compassqa.bain.com/compass/results?searchTerm=" + searchTerm + "&useDefaults=true";
        Object.assign(document.createElement("a"), {
            target: "_blank",
            href: searchUrl,
        }).click();
    }
}