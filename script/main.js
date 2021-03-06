$(document).ready(function () {
    console.log('main.js is working')
    console.log($)


    const dropdownTitles = $('.dropdown-title')
    const dropdownContents = $('.dropdown-content')
    const leftBarButtons = $('.leftBar-button')
    const itLink = $('#it-link')
    var delayedHide


    dropdownTitles.mouseenter(function() {
        dropdownContents.hide()
        dropdownTitles.not($(this)).removeClass('active')
        $(this).addClass('active')
        $(this).next().show()}
    )

    $('.dropdown-content, .dropdown-title').mouseleave(function(){
        delayedHide = setTimeout(function() {
            dropdownContents.hide()
            dropdownTitles.removeClass('active')
        }, 200)
    }).mouseenter(function() {
        clearTimeout(delayedHide)
    })

    
    leftBarButtons.click(function() {
        leftBarButtons.toggleClass('active');
    })


    itLink.mouseover(function() {
        itLink.children('i').toggleClass('fa-angle-down fa-angle-up')
    })

})