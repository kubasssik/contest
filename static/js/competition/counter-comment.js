var num = 2
export function counterComment() {
    let input = this.textLength;
    let output = this.nextElementSibling.children[0];
    
    output.style.opacity = '1';
    if (input === 0) output.style.opacity = '0';
    
    output.style.color = 'gray';
    if (input === 1000) output.style.color = 'var(--main-color-1)';
    
    output.textContent = `${input}/1000 символов`;
    
 
   
    let a = getHeightArea({text:this})
  
    
    if(this.scrollHeight > a) {
        num ++
    }
    if(input === 0) num = 2
    this.rows = num

}



function getHeightArea(p) {
    return +window.getComputedStyle(p.text, null).getPropertyValue("height").slice(0, -2) ;
}


