$(".nav a").click(function(evt){
    evt.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
});