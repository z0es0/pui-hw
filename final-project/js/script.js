$(document).ready(function () {
    $('.gallery-card-tag').click(function () {
        const selectedTag = $(this).text().trim();

        // hide projects
        $('.gallery-card').hide();

        // show projects
        $('.gallery-card').filter(function () {
            // check for matches
            return $(this).find('.gallery-card-tag').text().includes(selectedTag);
        }).show();
    });
});


// show all projects again
$('#show-all').click(function () {
    $('.gallery-card').show();
});