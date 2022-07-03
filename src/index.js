document.addEventListener(
  "mousewheel",
  function(e) {
  if (!e.ctrlKey && !e.metaKey) return;

  e.preventDefault();
  e.stopImmediatePropagation();
},
  { passive: false }
  );


  document.addEventListener(
    "gesturestart",
    function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  },
    { passive: false }
    );

    document.addEventListener(
      "keydown",
      function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      if (e.keyCode != 189 && e.keyCode != 187) return;
    
      e.preventDefault();
      e.stopImmediatePropagation();
    },
      { passive: false }
      );