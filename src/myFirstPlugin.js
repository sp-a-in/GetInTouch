export default {
    install:(app)=>{
            app.directive('fnt-size', (el, binding)=>{
                var size = 4;
                switch(binding.arg){
                    case "small":
                        size = 12;
                        break;
                    case "medium":
                        size = 14;
                        break;
                    case "large":
                        size = 24;
                        break;
                    default:
                        size = 16;
                        break;
                }
                el.style.fontSize = size + "px";
            });
    }
};