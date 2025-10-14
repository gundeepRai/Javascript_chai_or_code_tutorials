//1. seedha li tag m hi 'onlick' event: non scalable way
    // 2. way is even outdated (as onclick even gives less funtionality and features)
    // document.getElementById("jaggu").onclick = function(){
    //     alert("Radhe Radhe");
    // };

    // 3. Instead use Event Listener (can listen many events like of mouse, keyboard etc, )
    // document.getElementById('jaggu').addEventListener('click', function(e){
    //     // console.log(e);
    //     // ************** what is being printed here in console (of event e) is important for placements
    //     console.log("Jai jagganath");
    //     e.stopPropagation();
    //     // alert("Shri Radhe Jai Radhe!");
    // }, true);
    // here "click" is an event, and "false" is 3rd argument (imp one)
    // "e" is an event object.

    // NOTE*: earlier syntaxes, internet explorer had used 'attachEvent()''
    // jQuery uses 'on()' event listner

    // ---------- jaggu img pe dabate hi event e console pe print hoga usme se:
    // H.w. topics to read on mdn, of addEventListner()
    // type, timestamp, defaultPrevented
    //  target, to, srcElement ........ is imp
    // currentTarget
    // clientX, clientYm screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode ............


    // Event propagation: in 2 contexts:
    // "Event bubling" and "Event Capturing"
    // jinko 3rd argument, true ya false, of addEventListener, function se krte hai
    // Event bubling: ---> if 3rd arg is false
    // Event capturing: ---> if 3rd arg is true
    // bubling is sabse andar ka elem pehle, then uske bahar ke elements
    // capturing is, sabase bahar ke elements pe se andar ate jana usi element par

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("Hari bol");
        
    // }, true)


    // document.getElementById('google').addEventListener('click', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    // }, false);

    // eg of Real world scenerio:
    // Task: Removing of img when clicked
    document.querySelector('#images').addEventListener('click', function(e){
        // console.log(e.target.parentNode);
        if(e.target.tagName === 'IMG'){
            console.log(e.target.id);
            let img_to_remove = e.target.parentNode;
            img_to_remove.remove();
            
        }
        // just think why we put a check for tagName?
        // Hint : Event Spill Over ... 

        // other way:
        // img_to_remove.parentNode.removeChild(img_to_remove);

    }, false);



