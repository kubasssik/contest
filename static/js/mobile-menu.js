export function dotMenu() {
    let menu = this.parentElement.children[3]
    for (let i = 0; i < this.children.length; i++) {
        const e = this.children[i];
        e.classList.toggle('dot-active');
        menu.classList.toggle('d_n');
    }
}