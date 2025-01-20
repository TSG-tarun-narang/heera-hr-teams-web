$(document).ready(function () {
    $('#dvLoading').show();
    $('#dvCheckVPN').hide();
    CheckVPNandRedirect();

    // use setTimeout() to execute
    setInterval(function () {
        if ($('#dvCheckVPN').is(":visible") && $('#dvLoading').is(":hidden")) {
            CheckVPNandRedirect();
        }
    }, 3000);
});

function CheckVPNandRedirect() {
    $.ajax({
        url: 'https://compass.bain.com/compassapi/pulsecheck',
        cache: false,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            console.log("success");
            window.location.href = "https://workplace.bain.com/products/compass/";
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("error");
            $('#dvLoading').hide();
            $('#dvCheckVPN').show();
        }
    });
}