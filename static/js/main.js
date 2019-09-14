$(document).ready(function () {
    $('h2').each((idx, val) => {
        var id = $(val).attr('id');
        if (id) {
            $(val).html(
                `<a href=#${id} aria-hidden="true" class="header-anchor">#</a>${$(val).text()}`
            );
            // $(val).contents().wrap(`<a href=#${id} aria-hidden="true" class="header-anchor"></a>`);
        }
    });
})