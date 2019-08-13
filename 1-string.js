var a="My name is Namrata";
//Coun the charatres of the letters and the it should display the distinct character
//count 
a=a.split("");
var c=[];
for (i=0;i<a.length;i++)
   {
        if(c.includes(a[i])){
            continue;
        
    }
        else{
            b=a.filter(x=>(x===a[i])).length;
            c.push(a[i]);
            console.log(b,a[i]);
            
        }
    }
