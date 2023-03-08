$('#openMenu').click(() => {
    $('#menu').toggleClass('hidden');
    if($('#openMenu').find('img').attr('src') == 'assets/img/icon/menu.svg') {
        $('#openMenu').find('img').attr('src', 'assets/img/icon/close.svg');
    } else {
        $('#openMenu').find('img').attr('src', 'assets/img/icon/menu.svg');
    }
});