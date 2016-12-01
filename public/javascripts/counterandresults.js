(function(){

  var all = 8;
  var yesclicks = 0;
  var results = document.querySelector('#results');
  var noresults = document.querySelector('#no-results');
  var counter = document.querySelector('#counter');
  var shortListCounter = document.querySelector('.shortlist-counter');
  var removedCounter = document.querySelector('.removed-counter');

  function updatecounter() {
    --all;
    counter.innerHTML = all;
    shortListCounter.innerHTML = all;
    removedCounter.innerHTML = all;
  }

    function updateyesclicks()
    {
        yesclicks ++;
        //alert(yesclicks);
    }


  document.body.addEventListener('yepjob', function(ev) {
    results.innerHTML += '<li>'+ev.detail.job.innerHTML+'</li>';
    updatecounter();
    updateyesclicks();
  });

  document.body.addEventListener('nopejob', function(ev) {
    updatecounter();
  });

  document.body.addEventListener('deckempty', function(ev) {

      if (yesclicks > 0) {
       results.classList.add('live');
      }
     else   {
         noresults.classList.add('live');
         document.querySelector('h1').style.display = "none";
     }

    ev.detail.container.style.display = 'none';
  });

  window.addEventListener('load', function(ev) {
    // check if template is supported
    // browsers without it wouldn't need to
    // do the content shifting
    if ('content' in document.createElement('template')) {
      // get the template
      var t = document.querySelector('template');
      // get its parent element
      var list = t.parentNode;
      // cache the template content
      var contents = t.innerHTML;
      // kill the template
      list.removeChild(t);
      // add the cached content to the parent
      list.innerHTML += contents;
    }
    var listitems = document.body.querySelectorAll('.job');
    all = listitems.length + 1;
    updatecounter();
  });

})();
