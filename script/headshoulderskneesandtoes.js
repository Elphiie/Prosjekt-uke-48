var windw = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('#navbar').followTo('#header');