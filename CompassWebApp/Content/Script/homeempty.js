$(document).ready(function () {
    $('#dvLoading').show();
    $('#dvCheckVPN').hide();
    $.ajax({
        url: 'https://compass.bain.com/compassapi/pulsecheck',
        cache: false,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            window.location.href = "https://compass.bain.com";
        },
        error: function (xhr, textStatus, errorThrown) {
            $('#dvLoading').hide();
            $('#dvCheckVPN').show();
        }
    });
});