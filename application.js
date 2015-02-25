$(document).ready(function(){
  $('nav li').on('click', function(){
    this.addClass("active");
  });
});

/*<script>

      $(document).ready(function(){
        var $body = $('body');
        $body.html('');

        var index = streams.home.length - 1;
        var tweet = streams.home[index]
        
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($body);
          index -= 1;
        }

      });

</script> */