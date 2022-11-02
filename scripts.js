document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#show-more-btn') && !event.target.matches('#show-more-btn > span')) return;

    var elements = document.getElementsByClassName('initially-hidden');

    for(var el of elements){
        el.setAttribute("style", "display:block!important");        
    }

    setTimeout(() => {
        for(var el of elements){
            el.classList.toggle('fade');           
        }

        document.getElementById('show-more-btn').classList.add('initially-hidden');
    }, 50);
});