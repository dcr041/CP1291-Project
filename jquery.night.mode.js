(function($){
    $.fn.nightMode = function(options){
        var setting = $.extend({
            brightnessController: true,
            adjustText: "Would you like to adjust brightness?"
        }, options);

        return this.each(function() {
            var nightModeObject = $(this);
            var allChild = $(this).find("*");
            var preventDefault = setting.preventDefault;

            var brightnessMessage = document.createElement("div");
            var nightModeTrigger = document.createElement("button");
            var nightModeArea = document.createElement("section");
            var confirmAction = document.createElement("button");
            var brightnessController = document.createElement("input");
            var brightnessStatus = document.createElement("span");

            var icon =["<i class='fa fa-adjust'></i>",
            "<i class='fa fa-moon-o'></i>",
            "<i class='fa fa-sun-o'></i>"];

            $(brightnessMessage).hide();
            $(nightModeTrigger).html("Dark "+icon[1]).addClass("night-mode-trigger").insertAfter(this);
            $(nightModeArea).addClass("custom").insertAfter(nightModeObject);
            $(brightnessMessage).addClass("brightness-message").append(
                setting.adjustText+'<br><br>'+icon[0]).insertAfter(nightModeObject);
            $(brightnessController).prop({
                'type': 'range',  
                'min': 0,
                'max' :100,
            }).appendTo(brightnessMessage);
            $(brightnessStatus).appendTo(brightnessMessage);
        
            $(confirmAction).html("Confirm").addClass("confirm").appendTo(brightnessMessage);

            $(nightModeTrigger).bind('click', function(){
                $(nightModeArea).toggleClass("mode");
                if (setting.brightnessController == true){
                    if ($(nightModeArea).hasClass("mode")){
                        $(".brightness-message").fadeIn();
                        nightModeEnable();
                    } else {
                        lightModeEnable();
                    }     
                };

                $(brightnessController).on('input', function(){
                    $(allChild).not(preventDefault).css({
                    'color' : 'rgba(255, 255, 255,' +$(this).val()/101+')',
                    });
                    $(brightnessStatus).html($(this).val()+'\%');
                });
            });

            $(confirmAction).click(function(){
                $(this).parent().hide();
                $(".night-mode-trigger").prop('disabled', false);
            });
            

            if(setting.autoEnable == true){
                /* Auto enable night mode at 8 pm to 4 am */
                var time = new Date().getHours();
                if (time >=0 && time <5 ||  time > 20){
                    nightModeEnable();
                    $(nightModeArea).addClass("mode");
                    $(".night-mode-trigger").prop('disabled', false);
                }
            }

            function nightModeEnable(){
                $(nightModeObject).not(preventDefault).css({
                'background' : '#414841',
                'color' : 'rgba(240, 255, 240, 0.495049505)',
                'borderColor' : '#000',
                });
            
                $(allChild).not(preventDefault).css({
                'color' : 'rgba(255, 255, 255, 0.495049505)', 
                'background' : 'rgba(0, 0, 0, 0.3)',
                });
                $(nightModeTrigger).prop('disabled', true).html("Light "+icon[2]).css({
                'background' : '#fff',
                'color' : '#FDD017'
                });
                localStorage.setItem('dark-mode','dark');
            }
            
            function lightModeEnable(){
                $(nightModeTrigger).prop('disabled', false).html("Dark "+icon[1]).css({
                    'background' : '#212121',
                    'color' : '#f2f2f2'
                });
                $(nightModeObject).css({
                    'background' : '',//default
                    'color' : '',//default
                    'borderColor' : '' //default
                });
                $(allChild).css({
                    'color' : '',//default
                    'background' : '', //default
                });
                localStorage.setItem('dark-mode','light');
            }

            var darkMode;

            if (localStorage.getItem('dark-mode')) {  
                // if dark mode is in storage, set variable with that value
                darkMode = localStorage.getItem('dark-mode');  
            } else {  
                // if dark mode is not in storage, set variable to 'light'
                darkMode = 'light';  
            }

            // set new localStorage value
            localStorage.setItem('dark-mode', darkMode);


            if (localStorage.getItem('dark-mode') == 'dark') {
                nightModeEnable();
                $(nightModeArea).addClass("mode");
                $(".night-mode-trigger").prop('disabled', false);
            }
        });
    };
})(jQuery);