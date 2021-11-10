window.addEventListener('load', ()=>{
    let val;
    let displayScr = document.querySelector("#result");
    document.querySelector ("#lookup").addEventListener("click", (event)=>{
        event.preventDefault();
        let dis = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        val = `http://localhost/info2180-lab5/world.php?country= ${dis}`;
        lookUp();
    });

    document.querySelector("#cityLookUp").addEventListener("click", (event)=>{
        event.preventDefault();
        let dis = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        val = `http://localhost/info2180-lab5/world.php?country= ${dis}&context=cities`;
        lookUp();
    });

    function searchCountry (){
        fetch(val, {method : 'GET'})
        .then(outTxt => outTxt.text())
        .then(type => {
            outScreen.innerHTML = '';
            outScreen.innerHTML = type;
        })
    }

});