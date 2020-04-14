$(document).ready(function () {
    console.log('main.js is working')
    console.log($)


    const dropdownTitles = $('.dropdown-title')
    const dropdownContents = $('.dropdown-content')
    const dropdownWrapper = $('.dropdown-wrapper')
    const leftBarButtons = $('.leftBar-button')
    const itLink = $('#it-link')

    dropdownTitles.mouseenter(function() {
        preventDefault()
        dropdownContents.hide()
        $(this).next().show()}
    )

    $('body').not()

    leftBarButtons.click(function() {
        leftBarButtons.toggleClass('active');
    })

    itLink.mouseover(function() {
        itLink.children('i').toggleClass('fa-angle-down fa-angle-up')
    }
    )


})