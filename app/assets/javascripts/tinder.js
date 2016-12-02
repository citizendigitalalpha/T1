(function(){
  var animating = false;

  function animatejob(ev) {
    if (animating === false) {
      var t = ev.target;
      if (t.className === 'but-nope') {
        t.parentNode.classList.add('nope');
        animating = true;
        fireCustomEvent('nopejob',
          {
            origin: t,
            container: t.parentNode,
            job: t.parentNode.querySelector('.job')
          }
        );
      }
      if (t.className === 'but-yay') {
        t.parentNode.classList.add('yes');
        animating = true;
        fireCustomEvent('yepjob',
          {
            origin: t,
            container: t.parentNode,
            job: t.parentNode.querySelector('.job')
          }
        );
      }
      if (t.classList.contains('current')) {
        fireCustomEvent('jobchosen',
          {
            container: getContainer(t),
            job: t
          }
        );
      }
    }
  }

  function fireCustomEvent(name, payload) {
    var newevent = new CustomEvent(name, {
      detail: payload
    });
    document.body.dispatchEvent(newevent);
  }

  function getContainer(elm) {
    var origin = elm.parentNode;
    if (!origin.classList.contains('jobcontainer')){
      origin = origin.parentNode;
    }
    return origin;
  }

  function animationdone(ev) {
    animating = false;
    var origin = getContainer(ev.target);
    if (ev.animationName === 'yay') {
      origin.classList.remove('yes');
    }
    if (ev.animationName === 'nope') {
      origin.classList.remove('nope');
    }
    if (origin.classList.contains('list')) {
      if (ev.animationName === 'nope' ||
          ev.animationName === 'yay') {
        origin.querySelector('.current').remove();
        if (!origin.querySelector('.job')) {
          fireCustomEvent('deckempty', {
            origin: origin.querySelector('button'),
            container: origin,
            job: null
          });
          $(".govuk-related-items.shortlist").hide();
          $(".tinder").addClass('shortlist');
     } else {
          origin.querySelector('.job').classList.add('current');
        }
      }
    }
  }
  document.body.addEventListener('animationend', animationdone);
  document.body.addEventListener('webkitAnimationEnd', animationdone);
  document.body.addEventListener('click', animatejob);
  window.addEventListener('DOMContentLoaded', function(){
  document.body.classList.add('tinder');
  });
})();

/* Shortlist code - START */
(function(){

     $("button.but-yay").click(function(){
          $("aside.shortlist .grey").hide();
          // $("aside.shortlist li.bank-manager").show("slow");
          // if ($(this).siblings(".wrapper").child("h2").html() == "Bank manager") {
          //      $("aside.shortlist li.bank-manager").show();
          // }
          // $(this).parent().parent().parent().toggleClass("");
          // $(this).html($(this).text() == 'Unselect' ? 'Select' : 'Unselect' + "<span></span>");
     });

     $("button.but-nope").click(function(){

     });


})();
/* Shortlist code - END */
