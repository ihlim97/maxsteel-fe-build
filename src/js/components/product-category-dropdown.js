$(function () {

    const $select = $('.product-category-selector select');
    const $navTabs = $('.nav-product-category');

    $select.on('change', function () {
        const value = $(this).val();
        $navTabs.find(`[data-toggle=tab][href="${ value }"]`).tab('show');
    })

    $navTabs.find('[data-toggle=tab]').on('show.bs.tab', function () {
        const href = $(this).attr('href');
        $select.val(href)
    })
})