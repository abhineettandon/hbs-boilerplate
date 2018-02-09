$(document).ready(function () {

    // initiating datatables
    $('.table').DataTable();

})

// marketdata ajax
function getMarketSummary(market) {

    $.ajax({
        type: 'GET',
        url: 'market-summary',
        data: {
            market: market
        },
        success: function (res) {
            $('#modal-data').html(res);
            $('#modal-market-summary').modal('show');
        }
    })

}