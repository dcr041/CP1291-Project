(function($) {
    $.fn.shuffleString = function(options) {

        var settings = $.extend({
            color: "#000000",
            done: null
        }, options)

        return this.each(function() {
            $(this).text(shuffleString($(this).text()));
            $(this).css('color', settings.color);
            if($.isFunction(settings.done)) {
                settings.done.call(this);
            }

            function shuffleString(str) {
                var array = str.split("");
                for(var index = array.length - 1; index > 0; index--) {
                    var val = Math.floor(Math.random() * (index + 1));
                    var temp = array[index];
                    array[index] = array[val];
                    array[val] = temp;
                }
                return array.join("");
            }
        })
    }

}(jQuery));