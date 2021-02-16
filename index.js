
        var myvar=setInterval(gun,1000);
        function gun()
        {
            var d = new Date();
            var htime = d.getHours();
            var mtime = d.getMinutes();
            var stime = d.getSeconds();
        
        //    document.getElementById("demo").innerHTML = htime;
        //    document.getElementById("demo1").innerHTML = mtime;
        //    document.getElementById("demo2").innerHTML = stime;
        
        
            var hrotation=30*htime + mtime/2;
            var mrotation=6*mtime;
            var srotation=6*stime;
        
            
           document.getElementById("demo").innerHTML = hrotation;
           document.getElementById("demo1").innerHTML = mrotation;
           document.getElementById("demo2").innerHTML = srotation;
            //document.getElementById("demo").innerHTML = mrotation;
            // hour.style.transform = 'rotate(${hrotation}deg)';
            // minute.style.transform = 'rotate(${mrotation}deg)';
            // second.style.transform = 'rotate(${srotation}deg)';
        
            document.getElementById("hour").style.msTransform = "rotate((30deg)"; 
            document.getElementById("minute").style.msTransform = "rotate((mrotation)deg)"; 
            document.getElementById("second").style.msTransform = "rotate((srotation)deg)"; 
        }