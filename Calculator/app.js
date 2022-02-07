




const num=document.querySelectorAll('.as');
const inp=document.querySelector('input');
const equal=document.querySelector('.equal');
let newsc=false;
let arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let x=0;
const cancel=document.querySelector('.cancel');
const cross=document.querySelector('.cross');
let  newv="";

const sqr=document.querySelector('.sqr');

const sqrt=document.querySelector('.sqrt');

for(let i of num)
{
    // console.log(i);
    i.addEventListener('click',()=>{
        const a=i.innerText;
        if(newsc){
        inp.value=a;
        arr[x]=a;
        x++;
        newsc=false;
    }
    else
        inp.value+=a;
        arr[x]=a;
        x++
    })
}



equal.addEventListener('click',()=>{
    let  re=eval(inp.value);
    inp.value=re;
    newsc=true;
    for(let j of arr)
    {
        j="";
    }
    x=0;
})


cancel.addEventListener('click',()=>{
    inp.value="";
})

cross.addEventListener('click',()=>{
  newv="";
    for(let h=0;h<x-1;h++){
     newv+=arr[h];}
     inp.value=newv;
     arr[x-1]=0;
     x--;

})

sqr.addEventListener('click',()=>{
    let re=eval(inp.value);
    re=re*re;
    inp.value=re;
    newsc=true;
})

sqrt.addEventListener('click',()=>{
    let re=eval(inp.value);
    re=Math.sqrt(re);
    inp.value=re;
    newsc=true;
})