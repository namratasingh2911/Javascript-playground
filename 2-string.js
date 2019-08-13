//Make the first letter of each word in  the string 
var a="my name is namrata";

a=a.toLowerCase().split(" ");

for(i=0;i<a.length;i++){
    a[i]=a[i].charAt(0).toUpperCase()+a[i].substring(1);
    
    
}
console.log(a.join(" "));
