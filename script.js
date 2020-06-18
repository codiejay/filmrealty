window.onload = () => { 
  let mouse = $('.mouseman');
  let menuIcon = $('.mobileBurger');

  let navShowState = false;
  $(menuIcon).click((e) => { 
    let targetElem = e.target;
    if(!navShowState) {
      $($('#date').children()[0]).attr('style', 'color: white');
      $($('#date').children()[1]).attr('style', 'color: white');
      menuIcon.attr('style', 
      `
        background: white; 
        border-radius: 200px;
        padding: 4px;

      `)
      $('.cancel').attr('style', 'display: block; transform: scale(0.6)');
      $('#menuBurger').attr('style', 'display: none');
      $('#mainContent').attr('style', 'display: none');
      $('#facts').attr('style', 'display: none');
      $('#mobileLayover').attr('style', 'display: block;');
      $('nav').attr(
        `style`, 
          `margin-bottom: 0; 
          position: fixed; 
          top: 0; 
          width: 100%; 
          z-index: 2`
         )
      navShowState = true;
     }
     else { 
      $($('#date').children()[0]).attr('style', 'color: #B9B8B8');
      $($('#date').children()[1]).attr('style', 'color: #313131');
      menuIcon.attr('style', 
      `
        background: transparent; 
        border-radius: 200px;
        padding: 4px;

      `);
      $('.cancel').attr('style', 'display: none;');
      $('#menuBurger').attr('style', 'display: block');
       $('#mainContent').attr('style', 'display: none');
      $('#mainContent').attr('style', 'display: block');
      $('#facts').attr('style', 'display: block');
       $('nav').attr(
         `style`, 
           `display: grid; 
            position: static; 
            width: 100%; 
            z-index: 2`
          );
      $('#mobileLayover').attr('style', 'display: none');

      navShowState = false;
     }
  });

  $('body').mousemove((event) => { 
    mouse.attr(
    'style', 
    ` 
      display: block; 
      width: 50px; 
      height: 50px;
      background: #FD7F57;
      transition: all 0.1s;
      position: absolute;
      left: ${event.clientX/ screen.width * 100/1 - 1.1}%;
      top: ${event.clientY/ screen.height * 100/1 }%;
      border-radius: 200px;
    `
    )
  });

}